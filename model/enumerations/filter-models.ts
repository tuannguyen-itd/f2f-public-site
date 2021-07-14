export const enum FilterOperation {
  GREATER_THAN_OR_EQUAL = 'greaterThanOrEqual',
  LESS_THAN_OR_EQUAL = 'lessThanOrEqual',
  CONTAINS = 'contains',
  EQUALS = 'equals',
}

export const enum FilterInputType {
  TEXT = 'TEXT',
  SELECT = 'SELECT',
  RANGE_YEAR = 'RANGE_YEAR',
  RANGE_DAY = 'RANGE_DAY',
  CUSTOM = 'CUSTOM',
}
