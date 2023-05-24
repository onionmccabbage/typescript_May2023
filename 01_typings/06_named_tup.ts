// see https://www.typescriptlang.org/play?ts=4.0.2&ssl=31&ssc=37&pln=19&pc=1#code/PTAEBUFcAcBsFMDOoCGAneq1pQT2QO4AW8GoALiaAPZoAmpoAlskwLbS3koB25F1ClXK5omRPnLw2AGgBQIULmqRQAY16gE6HqDa1MKAEYr+lac13wAHig4IAXORgJEchWACSu8KPgBlNTQmaH4AFgA6AAYZIUwRMRoAM1QIF3gAcmQAcxQmHng6ONQjJlgmEQFQbKYAN3gPVJ47eMFzUDomJKTSeD5QaHRyZGoU9vQcXAj3RQAxWlAbOzh4WOVVSERCqoJgqVSAGRR+A+oebK1qDXImM9BaphRU5xWHdwTMAHlYOlPr290AF5QABtHiQNhGUixcGQ0gAXXcajOiH4sCuxwBiAcoG+vwxNzOIPhoGBILkoEpoLCUQiAHYAIxhMKxAC0dMiUSiADZ4fIqaCAKwAZgi3LCgoAHGyGfTJYLEYjGgBpHjUAj5C7EJhqIjMZBHG7OBioHhFU7nCqQE0sVCQpjZSAqRCxXhFRCCdaNAgqH56AxaJgAa3gsFwoCIKHq6hQsAQRQqh2OFouLwQ00aAHUKnrOWsVDHdLsKvA3nIPqAAHLwAh-TF3MmwY442FQtCxdHnFsQttK5E8VGgAq1glYnHVkf-IkkskUqkgwUAJgiwrpUUXsUikoAnEu+XPKQvRcKwtvpaBWdyIovuVFhYqZmBwFRmmwkEP1aBEERPzBLMVCgqBZiD6JQCx-eo0BoSDGnaKJTSKBlUDMKg+iKUZigKaw0XyBp+0HJImDQVFDVJIcazrQkBxBKJ4RoxF8P4QjiPIFMyOHSisXokEGSVRRMyIMp4kjfg2AdIh+C2Cwnm4IpIDNUgQNgMTzlido2DyXRsmoWNQEaW1yEEPpEEgMhKGOSwkloDSqP1HgMjRahBxAotaCDTVvRzYoKwkVFpAiUB5igpZ7FWUAXMWbCcDUG5zkaQYcDfKRiNAJI0GoNhUiSeSYoBUBNk1YoAAV0BaZK9MUSAbnKSoPjLbKeFyu41D6ZKAFkUGgAAKWAuyHHtoS0Zt+rhNAAEpQAAb1AABfR9QG8UA8yEW0Q3gaBkF6i43SG8hyz8UAAGFWtIDroBKxLkGBC6ytIRAAB4Pgwlq+FOzqAD55sW0VtzUwTCF9Ip0WoINAxDfbEjxY7XrQM6brYK7QVbQbkbQPiwA69zzi-DLMAw9SA2RULrAoA6NJ4EJICbWz0UQCRGisqD2gS26oPyRmbIBCIgA
// With 4.0, you can write a named tuple:

type NewLocation = [lat: number, long: number]

const newLocations: NewLocation[] = [
    [52.3702, 4.8952],
    [53.3498, -6.2603]
]

// The names now show up in the editor when you hover over
// the 0 and 1 at the end of the next line
const firstLat = newLocations[0][0]
const firstLong = newLocations[0][1]

// can we use the names - no, they are names for the data types of the members of the tuple?
console.log( newLocations )