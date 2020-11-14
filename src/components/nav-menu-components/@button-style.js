const button = {
  height: '36px',
  textAlign: 'center',
  padding: '0 15px',
  lineHeight: '36px',
  color: '#e9e9e9',
  fontWeight: 500,
  fontSize: '16px',
  margin: '0 15px'
}

const danger = {
  backgroundColor: '#aa3131'
}

const success = {
  backgroundColor: '#497349'
}

export const btnDanger = { ...button, ...danger }

export const btnSuccess = { ...button, ...success }
