/*
Language: Perspectives ARC
Author: Joop Ringelberg <joopringelberg@perspect.it>
Contributors: Cor Baars <corbaars@perspect.it>
Description: A modelling language for co-operation.
Website: https://joopringelberg.github.io/perspectives-documentation/
*/

export default function(hljs) {
    return {
      name: "Perspectives ARC",
      keywords: 'domain',
      case_insensitive: false,
      contains: 
        [
          hljs.NUMBER_MODE
        ]
    }
  }