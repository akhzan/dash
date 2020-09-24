export const CUSTOMER_STATUS = {
  EX: {
    isBlocked: false,
    name: 'Dormant',
    color: '#ffb100',
  },
  BL: {
    isBlocked: true,
    name: 'Blocked',
    color: '#f16a70',
  },
  A: {
    isBlocked: false,
    name: 'Active',
    color: '#3b8ef3',
  },
}

export const CUSTOMER_STATUS_FILTER = [
  { code: '', name: 'All Status' },
  { code: 'A', name: 'Active' },
  { code: 'EX', name: 'Dormant' },
  { code: 'BL', name: 'Blocked' },
]
