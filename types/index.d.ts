import { MDCListIndex } from '@material/list/index';
import { Plugin } from 'vue';

declare const VueMaterialAdapter: Exclude<Plugin['install'], undefined>;
export default VueMaterialAdapter;

declare const banner: { install: (vm: any) => void };
declare const button: { install: (vm: any) => void };
declare const card: { install: (vm: any) => void };
declare const checkbox: {
  install: (vm: any) => void;
  isChecked(): boolean;
  setChecked(checked: boolean): void;
  setIndeterminate(indeterminate: boolean): void;
};
declare const chips: { install: (vm: any) => void };
declare const circularProgress: { install: (vm: any) => void };
declare const dataTable: {
  install: (vm: any) => void;
  getSelectedRowIds(): Array<string | null>;
};
declare const dialog: { install: (vm: any) => void };
declare const drawer: {
  install: (vm: any) => void;
  show(): void;
  close(): void;
  open(): void;
  toggle(): void;
};
declare const fab: { install: (vm: any) => void };
declare const floatingLabel: { install: (vm: any) => void; getWidth(): number };
declare const iconButton: { install: (vm: any) => void };
declare const layoutGrid: { install: (vm: any) => void };
declare const lineRipple: {
  install: (vm: any) => void;
  setRippleCenter(xCoordinate: number): void;
  activate(): void;
  deactivate(): void;
};
declare const linearProgress: { install: (vm: any) => void };
declare const list: {
  install: (vm: any) => void;

  setEnabled(itemIndex: number, isEnabled: boolean): void;
  typeaheadMatchItem(nextChar: string, startingIndex?: number): number;
  typeaheadInProgress(): boolean;
  getSelectedIndex(): MDCListIndex;
  setSelectedIndex(index: MDCListIndex): void;
  getPrimaryText(item: any): string;
  setSingleSelection(value: boolean): void;
};
declare const materialIcon: { install: (vm: any) => void };
declare const menu: { install: (vm: any) => void };
declare const notchedOutline: { install: (vm: any) => void };
declare const radio: { install: (vm: any) => void };
declare const segmentedButton: { install: (vm: any) => void };
declare const select: { install: (vm: any) => void };
declare const slider: { install: (vm: any) => void };

declare interface Snack {
  timeoutMs?: number;
  closeOnEscape?: boolean;
  message: string;
  actionText?: string;
  dismissAction?: boolean;
  leading?: boolean;
  stacked?: boolean;
}

declare const snackbar: {
  install: (vm: any) => void;
  handleSnack: (snack: Snack) => void;
};

declare const switchControl: { install: (vm: any) => void };
declare const tabs: { install: (vm: any) => void };
declare const textfield: { install: (vm: any) => void };
declare const tooltip: { install: (vm: any) => void };
declare const topAppBar: {
  install: (vm: any) => void;
  setScrollTarget(any): void;
};
export {
  banner,
  button,
  card,
  checkbox,
  chips,
  circularProgress,
  dataTable,
  dialog,
  drawer,
  fab,
  floatingLabel,
  iconButton,
  layoutGrid,
  lineRipple,
  linearProgress,
  list,
  materialIcon,
  menu,
  notchedOutline,
  radio,
  segmentedButton,
  select,
  slider,
  snackbar,
  switchControl,
  tabs,
  textfield,
  tooltip,
  topAppBar,
};
