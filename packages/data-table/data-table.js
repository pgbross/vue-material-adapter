import { MDCCheckbox } from '@material/checkbox';
import * as test from '@material/data-table';
import { MDCDataTableFoundation } from '@material/data-table/foundation';
import { closest } from '@material/dom/ponyfill';
import { onBeforeUnmount, onMounted, reactive, toRefs } from 'vue';
import { CheckboxAdapter } from './checkbox-adapter';

export default {
  name: 'mcw-data-table',
  props: { sticky: { type: Boolean } },
  setup(props, { emit }) {
    const uiState = reactive({
      classes: { 'mdc-data-table--sticky-header': props.sticky },
      root: null,
    });

    const checkboxFactory = el => {
      return el.__vue__ ? new CheckboxAdapter(el.__vue__) : new MDCCheckbox(el);
    };

    const { cssClasses, selectors, dataAttributes, SortValue, messages } = test;

    let foundation;
    let headerRow;
    let rowCheckboxList;
    let content;
    let headerRowCheckbox;
    let handleHeaderRowCheckboxChange;
    let handleRowCheckboxChange;
    let headerRowClickListener;

    const getRows = () => {
      return foundation.getRows();
    };

    const layout = () => {
      foundation.layout();
    };

    const getHeaderCells = () => {
      return [].slice.call(
        uiState.root.querySelectorAll(selectors.HEADER_CELL),
      );
    };

    const getRowByIndex_ = index => {
      return getRows()[index];
    };

    const getRowIdByIndex_ = index => {
      return getRowByIndex_(index).getAttribute(dataAttributes.ROW_ID);
    };

    const getSelectedRowIds = () => {
      return foundation.getSelectedRowIds();
    };

    const getSortStatusMessageBySortValue = sortValue => {
      switch (sortValue) {
        case SortValue.ASCENDING:
          return messages.SORTED_IN_ASCENDING;
        case SortValue.DESCENDING:
          return messages.SORTED_IN_DESCENDING;
        default:
          return '';
      }
    };

    const handleHeaderRowClick = event => {
      const headerCell = closest(event.target, selectors.HEADER_CELL_WITH_SORT);

      if (!headerCell) {
        return;
      }

      const columnId = headerCell.getAttribute(dataAttributes.COLUMN_ID);
      const columnIndex = getHeaderCells().indexOf(headerCell);
      if (columnIndex === -1) {
        return;
      }

      foundation.handleSortAction({ columnId, columnIndex, headerCell });
    };

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),
      removeClass: className => {
        // eslint-disable-next-line no-unused-vars
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },
      getHeaderCellElements: () => getHeaderCells(),
      getHeaderCellCount: () => getHeaderCells().length,

      getAttributeByHeaderCellIndex: (index, attribute) => {
        return getHeaderCells()[index].getAttribute(attribute);
      },
      setAttributeByHeaderCellIndex: (index, attribute, value) => {
        getHeaderCells()[index].setAttribute(attribute, value);
      },

      setClassNameByHeaderCellIndex: (index, className) => {
        getHeaderCells()[index].classList.add(className);
      },
      removeClassNameByHeaderCellIndex: (index, className) => {
        getHeaderCells()[index].classList.remove(className);
      },

      notifySortAction: data => {
        emit(
          'mdc-data-table:sorted',
          {
            data,
          },
          true,
        );
      },
      getTableContainerHeight: () => {
        const tableContainer = uiState.root
          .querySelector`.${cssClasses.CONTAINER}`;

        if (!tableContainer) {
          throw new Error('MDCDataTable: Table container element not found.');
        }

        return tableContainer.getBoundingClientRect().height;
      },
      getTableHeaderHeight: () => {
        const tableHeader = uiState.root.querySelector(selectors.HEADER_ROW);

        if (!tableHeader) {
          throw new Error('MDCDataTable: Table header element not found.');
        }

        return tableHeader.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: styles => {
        const progressIndicator = uiState.root.querySelector(
          selectors.PROGRESS_INDICATOR,
        );
        if (!progressIndicator) {
          throw new Error(
            'MDCDataTable: Progress indicator element not found.',
          );
        }

        Object.assign(progressIndicator.style, styles);
      },

      addClassAtRowIndex: (rowIndex, className) =>
        getRows()[rowIndex].classList.add(className),
      getRowCount: () => getRows().length,
      getRowElements: () =>
        [].slice.call(uiState.root.querySelectorAll(selectors.ROW)),
      getRowIdAtIndex: rowIndex =>
        getRows()[rowIndex].getAttribute(dataAttributes.ROW_ID),
      getRowIndexByChildElement: el => {
        return getRows().indexOf(closest(el, selectors.ROW));
      },
      getSelectedRowCount: () =>
        uiState.root.querySelectorAll(selectors.ROW_SELECTED).length,
      isCheckboxAtRowIndexChecked: rowIndex =>
        rowCheckboxList[rowIndex].checked,
      isHeaderRowCheckboxChecked: () => headerRowCheckbox.checked,
      isRowsSelectable: () =>
        !!uiState.root.querySelector(selectors.ROW_CHECKBOX),
      notifyRowSelectionChanged: data => {
        emit('mdc-data-table:rowselectionchanged', {
          row: getRowByIndex_(data.rowIndex),
          rowId: getRowIdByIndex_(data.rowIndex),
          rowIndex: data.rowIndex,
          selected: data.selected,
        });
      },
      notifySelectedAll: () => emit('mdc-data-table:selectedall', {}),
      notifyUnselectedAll: () => emit('mdc-data-table:unselectedall', {}),
      registerHeaderRowCheckbox: () => {
        headerRowCheckbox?.destroy();

        const checkboxEl = uiState.root.querySelector(
          selectors.HEADER_ROW_CHECKBOX,
        );
        headerRowCheckbox = checkboxFactory(checkboxEl);
      },
      registerRowCheckboxes: () => {
        if (rowCheckboxList) {
          rowCheckboxList.forEach(checkbox => checkbox.destroy());
        }

        rowCheckboxList = [];
        getRows().forEach(rowEl => {
          const el = rowEl.querySelector(selectors.ROW_CHECKBOX);
          const checkbox = checkboxFactory(el);

          rowCheckboxList.push(checkbox);
        });
      },
      removeClassAtRowIndex: (rowIndex, className) => {
        getRows()[rowIndex].classList.remove(className);
      },
      setAttributeAtRowIndex: (rowIndex, attr, value) => {
        getRows()[rowIndex].setAttribute(attr, value);
      },
      setHeaderRowCheckboxChecked: checked =>
        (headerRowCheckbox.checked = checked),
      setHeaderRowCheckboxIndeterminate: indeterminate =>
        (headerRowCheckbox.indeterminate = indeterminate),
      setRowCheckboxCheckedAtIndex: (rowIndex, checked) =>
        (rowCheckboxList[rowIndex].checked = checked),
      setSortStatusLabelByHeaderCellIndex: (columnIndex, sortValue) => {
        const headerCell = getHeaderCells()[columnIndex];
        const sortStatusLabel = headerCell.querySelector(
          selectors.SORT_STATUS_LABEL,
        );

        if (!sortStatusLabel) {
          return;
        }

        sortStatusLabel.textContent = getSortStatusMessageBySortValue(
          sortValue,
        );
      },
    };

    onMounted(() => {
      headerRow = uiState.root.querySelector(`.${cssClasses.HEADER_ROW}`);

      handleHeaderRowCheckboxChange = () =>
        foundation.handleHeaderRowCheckboxChange();

      headerRow.addEventListener(
        'mdccheckbox:change',
        handleHeaderRowCheckboxChange,
      );

      headerRowClickListener = event => {
        handleHeaderRowClick(event);
      };

      headerRow.addEventListener('click', headerRowClickListener);

      content = uiState.root.querySelector(`.${cssClasses.CONTENT}`);

      handleRowCheckboxChange = event =>
        foundation.handleRowCheckboxChange(event);

      content.addEventListener('mdccheckbox:change', handleRowCheckboxChange);

      foundation = new MDCDataTableFoundation(adapter);
      foundation.init();

      layout();
    });

    onBeforeUnmount(() => {
      headerRow.removeEventListener(
        'mdccheckbox:change',
        handleHeaderRowCheckboxChange,
      );
      headerRow.removeEventListener('click', headerRowClickListener);

      content.removeEventListener(
        'mdccheckbox:change',
        handleRowCheckboxChange,
      );

      headerRowCheckbox?.destroy?.();
      rowCheckboxList?.forEach(checkbox => {
        checkbox.destroy?.();
      });
      foundation.destroy();
    });

    return { ...toRefs(uiState), getSelectedRowIds, layout };
  },
};
