export function getEndpoint(resource, endpoint) {
  let res = endpointsMap[resource];
  if (!res) { return; }

  return res.endpoints[endpoint];
}

export function getTemplate(...args) {
  let ep = getEndpoint(...args)
  if (!ep) { return; }

  return ep.path;
}

export const endpointsMap = {
  "accounts": {
    "label": "Accounts",
    "endpoints": {
      "all": {
        "label": "All Accounts",
        "path": "/accounts",
        "params": ["limit", "order", "cursor"]
      },
      "single": {
        "label": "Single Account",
        "path": "/accounts/{address}",
        "params": ["account_id"],
        "required": ["account_id"]
      }
    }
  },
  "effects": {
    "label": "Effects",
    "endpoints": {
      "all": {
        "label": "All Effects",
        "path": "/effects",
        "params": ["limit", "order", "cursor"]
      },
      "for_account": {
        "label": "Effects for Account",
        "path": "/accounts/{address}/effects",
        "params": ["account_id", "limit", "order", "cursor"],
        "required": ["account_id"]
      },
      "for_ledger": {
        "label": "Effects for Ledger",
        "path": "/ledger/{ledger}/effects",
        "params": ["ledger", "limit", "order", "cursor"],
        "required": ["ledger"]
      },
      "for_operation": {
        "label": "Effects for Operation",
        "path": "/operation/{operation}/effects",
        "params": ["operation", "limit", "order", "cursor"],
        "required": ["operation"]
      },
      "for_transaction": {
        "label": "Effects for Transaction",
        "path": "/transactions/{transaction}/effects",
        "params": ["transaction", "limit", "order", "cursor"],
        "required": ["transaction"]
      }
    }
  },
  "ledgers": {
    "label": "Ledger",
    "endpoints": {
      "all": {
        "label": "All Ledgers",
        "path": "/ledgers",
        "params": ["limit", "order", "cursor"]
      },
      "single": {
        "label": "Single Ledger",
        "path": "/ledgers/{ledger}",
        "params": ["ledger"],
        "required": ["ledger"]
      }
    }
  },
  "offers": {
    "label": "Offers",
    "endpoints": {
      "for_account": {
        "label": "Offers for Account",
        "path": "/accounts/{address}/offers",
        "params": ["account_id", "limit", "order", "cursor"],
        "required": ["account_id"]
      }
    }
  },
  "operations": {
    "label": "Operations",
    "endpoints": {
      "all": {
        "label": "All Operations",
        "path": "/operations",
        "params": ["limit", "order", "cursor"]
      },
      "single": {
        "label": "Single Operation",
        "path": "/operations/{operation}",
        "params": ["operation"],
        "required": ["operation"]
      },
      "for_account": {
        "label": "Operations for Account",
        "path": "/accounts/{address}/operations",
        "params": ["account_id", "limit", "order", "cursor"],
        "required": ["account_id"]
      },
      "for_ledger": {
        "label": "Operations for Ledger",
        "path": "/ledgers/{ledger}/operations",
        "params": ["ledger", "limit", "order", "cursor"],
        "required": ["ledger"]
      },
      "for_transaction": {
        "label": "Operations for Transaction",
        "path": "/transactions/{transaction}/operations",
        "params": ["transaction", "limit", "order", "cursor"],
        "required": ["transaction"]
      }
    }
  },
  "order_book": {
    "label": "Order Book",
    "endpoints": {
      "details": {
        "label": "Details",
        "path": "/order_book",
        "params": [
          "selling_asset",
          "buying_asset"
        ],
        "required": ["selling_asset", "buying_asset"]
      },
      "trades": {
        "label": "Trades",
        "path": "/order_book/trades",
        "params": [
          "selling_asset",
          "buying_asset"
        ],
        "required": ["selling_asset", "buying_asset"]
      }
    }
  },
  "paths": {
    "label": "Paths",
    "endpoints": {
      "all": {
        "label": "All Paths",
        "path": "/paths",
        "params": ["source_account", "destination_account", "destination_amount", "destination_asset"],
        "required": ["source_account", "destination_account", "destination_amount", "destination_asset"]
      }
    }
  },
  "payments": {
    "label": "Payments",
    "endpoints": {
      "all": {
        "label": "All Payments",
        "path": "/payments",
        "params": ["limit", "order", "cursor"]
      },
      "for_account": {
        "label": "Payments for Account",
        "path": "/accounts/{address}/payments",
        "params": ["account_id", "limit", "order", "cursor"],
        "required": ["account_id"]
      },
      "for_ledger": {
        "label": "Payments for Ledger",
        "path": "/ledgers/{ledger}/payments",
        "params": ["ledger", "limit", "order", "cursor"],
        "required": ["ledger"]
      },
      "for_transaction": {
        "label": "Payments for Transaction",
        "path": "/transactions/{transaction}/payments",
        "params": ["transaction", "limit", "order", "cursor"],
        "required": ["transaction"]
      }
    }
  },
  "transactions": {
    "label": "Transactions",
    "endpoints": {
      "all": {
        "label": "All Transactions",
        "path": "/transactions",
        "params": ["limit", "order", "cursor"]
      },
      "single": {
        "label": "Single Transaction",
        "path": "/transactions/{transaction}",
        "params": ["transaction"],
        "required": ["transaction"]
      },
      "for_account": {
        "label": "Transactions for Account",
        "path": "/accounts/{address}/transactions",
        "params": ["account_id", "limit", "order", "cursor"],
        "required": ["account_id"]
      },
      "for_ledger": {
        "label": "Transactions for Ledger",
        "path": "/ledgers/{ledger}/transactions",
        "params": ["ledger", "limit", "order", "cursor"],
        "required": ["ledger"]
      }
    }
  }
};
