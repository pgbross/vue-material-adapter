import {
  cssClasses,
  dataAttributes,
  MDCDataTableFoundation,
  messages,
  selectors,
  SortValue,
} from '@material/data-table/index.js';
import { closest } from '@material/dom/ponyfill.js';
import { h, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
// import { CheckboxAdapter } from './checkbox-adapter.js';

// const checkboxFactory = element => {
//   return element.__vue__
//     ? new CheckboxAdapter(element.__vue__)
//     : new MDCCheckbox(element);
// };

const getSortStatusMessageBySortValue = sortValue => {
  switch (sortValue) {
    case SortValue.ASCENDING: {
      return messages.SORTED_IN_ASCENDING;
    }
    case SortValue.DESCENDING: {
      return messages.SORTED_IN_DESCENDING;
    }
    default: {
      return '';
    }
  }
};

export default {
  name: 'mcw-data-table',
  props: { sticky: { type: Boolean } },
  setup(props, { emit, expose, slots }) {
    const uiState = reactive({
      classes: {
        'mdc-data-table': true,
        'mdc-data-table--sticky-header': props.sticky,
      },
    });

    const root = ref();

    let foundation;
    let headerRow;
    let rowCheckboxList = [];
    let content;
    let headerRowCheckbox;

    const getRows = () => foundation.getRows();
    const layout = () => foundation.layout();
    const getRowByIndex_ = index => getRows()[index];
    const getSelectedRowIds = () => foundation.getSelectedRowIds();

    const getHeaderCells = () => [
      ...root.value.querySelectorAll(selectors.HEADER_CELL),
    ];

    const getRowIdByIndex_ = index =>
      getRowByIndex_(index).getAttribute(dataAttributes.ROW_ID);

    const adapter = {
      addClass: className =>
        (uiState.classes = { ...uiState.classes, [className]: true }),

      removeClass: className => {
        const { [className]: removed, ...rest } = uiState.classes;
        uiState.classes = rest;
      },

      getHeaderCellElements: () => getHeaderCells(),

      getHeaderCellCount: () => getHeaderCells().length,

      getAttributeByHeaderCellIndex: (index, attribute) =>
        getHeaderCells()[index].getAttribute(attribute),

      setAttributeByHeaderCellIndex: (index, attribute, value) =>
        getHeaderCells()[index].setAttribute(attribute, value),

      setClassNameByHeaderCellIndex: (index, className) =>
        getHeaderCells()[index].classList.add(className),

      removeClassNameByHeaderCellIndex: (index, className) =>
        getHeaderCells()[index].classList.remove(className),

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
        const tableContainer = root.value
          .querySelector`.${cssClasses.CONTAINER}`;

        if (!tableContainer) {
          throw new Error('MDCDataTable: Table container element not found.');
        }

        return tableContainer.getBoundingClientRect().height;
      },

      getTableHeaderHeight: () => {
        const tableHeader = root.value.querySelector(selectors.HEADER_ROW);

        if (!tableHeader) {
          throw new Error('MDCDataTable: Table header element not found.');
        }

        return tableHeader.getBoundingClientRect().height;
      },

      setProgressIndicatorStyles: styles => {
        const progressIndicator = root.value.querySelector(
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

      getRowElements: () => [...root.value.querySelectorAll(selectors.ROW)],

      getRowIdAtIndex: rowIndex =>
        getRows()[rowIndex].getAttribute(dataAttributes.ROW_ID),

      getRowIndexByChildElement: element =>
        getRows().indexOf(closest(element, selectors.ROW)),

      getSelectedRowCount: () =>
        root.value.querySelectorAll(selectors.ROW_SELECTED).length,

      isCheckboxAtRowIndexChecked: rowIndex =>
        rowCheckboxList[rowIndex].isChecked(),

      isHeaderRowCheckboxChecked: () => headerRowCheckbox.isChecked(),

      isRowsSelectable: () =>
        !!root.value.querySelector(selectors.ROW_CHECKBOX),

      notifyRowSelectionChanged: data => {
        emit('mdcdatatable:rowselectionchanged', {
          row: getRowByIndex_(data.rowIndex),
          rowId: getRowIdByIndex_(data.rowIndex),
          rowIndex: data.rowIndex,
          selected: data.selected,
        });
      },

      notifySelectedAll: () => emit('mdcdatatable:selectedall', {}),

      notifyUnselectedAll: () => emit('mdcdatatable:unselectedall', {}),

      registerHeaderRowCheckbox: () => {
        const checkboxElement = root.value.querySelector(
          selectors.HEADER_ROW_CHECKBOX,
        );
        headerRowCheckbox = checkboxElement.__checkboxHelpers;
      },

      registerRowCheckboxes: () => {
        rowCheckboxList = [];
        for (const rowElement of getRows()) {
          const element = rowElement.querySelector(selectors.ROW_CHECKBOX);
          const checkbox = element.__checkboxHelpers;

          rowCheckboxList.push(checkbox);
        }
      },

      removeClassAtRowIndex: (rowIndex, className) =>
        getRows()[rowIndex].classList.remove(className),

      setAttributeAtRowIndex: (rowIndex, attribute, value) =>
        getRows()[rowIndex].setAttribute(attribute, value),

      setHeaderRowCheckboxChecked: checked =>
        headerRowCheckbox.setChecked(checked),

      setHeaderRowCheckboxIndeterminate: indeterminate =>
        headerRowCheckbox.setIndeterminate(indeterminate),

      setRowCheckboxCheckedAtIndex: (rowIndex, checked) =>
        rowCheckboxList[rowIndex].setChecked(checked),

      setSortStatusLabelByHeaderCellIndex: (columnIndex, sortValue) => {
        const headerCell = getHeaderCells()[columnIndex];
        const sortStatusLabel = headerCell.querySelector(
          selectors.SORT_STATUS_LABEL,
        );

        if (!sortStatusLabel) {
          return;
        }

        sortStatusLabel.textContent =
          getSortStatusMessageBySortValue(sortValue);
      },
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

    const handleHeaderRowCheckboxChange = () =>
      foundation.handleHeaderRowCheckboxChange();

    const handleRowCheckboxChange = event =>
      foundation.handleRowCheckboxChange(event);

    const handleContentClick = event => {
      const dataRowElement = closest(event.target, selectors.ROW);
      if (!dataRowElement) {
        return;
      }

      foundation.handleRowClick({
        rowId: getRowIdByRowElement(dataRowElement),
        row: dataRowElement,
      });
    };

    onMounted(() => {
      headerRow = root.value.querySelector(`.${cssClasses.HEADER_ROW}`);

      headerRow.addEventListener(
        'mdccheckbox:change',
        handleHeaderRowCheckboxChange,
      );

      headerRow.addEventListener('click', handleHeaderRowClick);

      content = root.value.querySelector(`.${cssClasses.CONTENT}`);
      content.addEventListener('click', handleContentClick);
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
      headerRow.removeEventListener('click', handleHeaderRowClick);

      content.removeEventListener(
        'mdccheckbox:change',
        handleRowCheckboxChange,
      );

      content.removeEventListener('click', handleContentClick);

      foundation.destroy();
    });

    expose({ getSelectedRowIds, layout });

    return () => {
      return h('div', { ref: root, class: uiState.classes }, [
        h('div', { class: 'mdc-data-table__table-container' }, [
          slots.default(),
        ]),
      ]);
    };
  },
};

// ===
// Private functions
// ===
function getRowIdByRowElement(rowElement) {
  return rowElement.getAttribute(dataAttributes.ROW_ID);
}
