const useCurrencies = (currency) =>{
    const currencies = [
        {
          value: 'USD',
          label: <i class="la la-usd" />,
        },
        {
          value: 'EUR',
          label: <i class="la la-eur" />,
        },
        {
          value: 'cny',
          label: <i class="la la-cny" />
        },
      ];
    if(currency){
        for (const curr of currencies) {
            if(curr.value.toUpperCase==currency?.toUpperCase) 
            return curr.label
        }
    }
    return currencies
}
export {useCurrencies}