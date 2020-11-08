const button = {
  'height': '36px',
  'text-align': 'center',
  'padding': '0 15px',
  'line-height': '36px',
  'color': '#e9e9e9',
  'font-weight': 500,
  'font-size': '16px',
  'margin': '0 15px'
}

const danger = {
  backgroundColor: '#aa3131'
}

const success = {
  backgroundColor: '#497349'
}

module.exports = {
  btnDanger: { ...button, ...danger },
  btnSuccess: { ...button, ...success }
}