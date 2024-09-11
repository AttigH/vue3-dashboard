export default {
  toolbar: {
    undo: 'undo',
    redo: 'restore',
    print: 'print',
    paintformat: 'format brush',
    clearformat: 'clear format',
    format: 'data format',
    fontName: 'font',
    fontSize: 'font size',
    fontBold: 'bold',
    fontItalic: 'italic',
    underline: 'underline',
    strike: 'strike',
    color: 'font color',
    bgcolor: 'fill color',
    border: 'border',
    merge: 'merge cells',
    align: 'horizontal alignment',
    valign: 'vertical alignment',
    textwrap: 'automatic line wrap',
    freeze: 'freeze',
    autofilter: 'automatic filter',
    formula: 'function',
    more: 'more'
  },
  contextmenu: {
    copy: 'copy',
    cut: 'cut',
    paste: 'paste',
    pasteValue: 'paste data',
    pasteFormat: 'paste format',
    hide: 'hide',
    insertRow: 'insert row',
    insertColumn: 'insert column',
    deleteSheet: 'delete',
    deleteRow: 'delete row',
    deleteColumn: 'delete column',
    deleteCell: 'delete',
    deleteCellText: 'delete data',
    validation: 'data validation',
    cellprintable: 'printable',
    cellnonprintable: 'non-printable',
    celleditable: 'editable',
    cellnoneditable: 'non-editable'
  },
  print: {
    size: 'paper size',
    orientation: 'direction',
    orientations: ['landscape', 'portrait']
  },
  format: {
    normal: 'Normal',
    text: 'Text',
    number: 'Number',
    percent: 'Percent',
    rmb: 'RMB',
    usd: 'US dollar',
    eur: 'Euro',
    date: 'Short date',
    time: 'Time',
    datetime: 'Long date',
    duration: 'Duration'
  },
  formula: {
    sum: 'sum',
    average: 'average',
    max: 'maximum',
    min: 'minimum',
    concat: 'character concatenation',
    _if: 'conditional judgment',
    and: 'and',
    or: 'or'
  },
  validation: {
    required: 'This value is required',
    notMatch: 'This value does not match the validation rule',
    between: 'This value should be between {} and {}',
    notBetween: 'This value should not be between {} and {}',
    notIn: 'This value is not in the list',
    equal: 'This value should be equal to {}',
    notEqual: 'This value should not be equal to {}',
    lessThan: 'This value should be less than {}',
    lessThanEqual: 'This value should be less than or equal to {}',
    greaterThan: 'This value should be greater than {}',
    greaterThanEqual: 'This value should be greater than or equal to {}'
  },
  error: {
    pasteForMergedCell: 'Cannot perform this operation on merged cells'
  },
  calendar: {
    weeks: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  button: {
    next: 'next step',
    cancel: 'cancel',
    remove: 'delete',
    save: 'save',
    ok: 'confirm'
  },
  sort: {
    desc: 'descending',
    asc: 'ascending'
  },
  filter: {
    empty: 'blank'
  },
  dataValidation: {
    mode: 'mode',
    range: 'cell range',
    criteria: 'condition',
    modeType: {
      cell: 'cell',
      column: 'column mode',
      row: 'row mode'
    },
    type: {
      list: 'list',
      number: 'number',
      date: 'date',
      phone: 'phone number',
      email: 'email'
    },
    operator: {
      be: 'in the range',
      nbe: 'not in the range',
      lt: 'less than',
      lte: 'less than or equal to',
      gt: 'greater than',
      gte: 'greater than or equal to',
      eq: 'equal to',
      neq: 'not equal to'
    }
  }
}
