const express  = require('express')

module.exports = server => {
  
  // Base URL
  const router = express.Router()
  server.use('/api', router)

  // BillingCycle Routes
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}
