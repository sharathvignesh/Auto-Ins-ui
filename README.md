# Auto Insurance UI

Auto Insurance calculator UI consists of multi-step eas process to calculate premium and pay at the last option.

- Step one would request your personal details
- Step two would ask about your vehicle details
- Step three will show the premium and you would need to pay.


## Installation

Clone the repo and run `npm install`

### Sample env
* Replace with your server URL
```bash
VITE_API_URL = http://localhost:3005
```

## Start

After the successfull installation of the packages: `npm run dev`

## Directory structure
```
Auto-Ins
└─── src 
    └─── containers
        └─── Content 
        └─── Header 
      └─── utils  
        └─── queries  
        └─── validations
```

#### Todo

- [ ] Cypress integration tests and Jest unit tests