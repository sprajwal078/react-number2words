# React Number2words
React component to convert number into words.

## Installation
```bash
npm install react-number2words
```

<!-- ## Demo -->
<!-- https://sprajwal078.github.io/ng-number2words/ -->

## Usage
```js
import Number2Words from 'react-number2words';
```
Then in your react app you can use

```html
<Number2Words value={123.53} />
```

## Examples
### Default
```html
<Number2Words value={14600728195} />
```
will output\
`fourteen billion six hundred million seven hundred twenty eight thousand one hundred ninety five`

### Decimal Value
```html
<Number2Words value={12.32} />
```
will output\
`twelve point three two`

### Hindu-Arabic System
```html
<Number2Words value={235678943226} system={hinduArabic}/>
```
will output\
`two kharab thirty five arab sixty seven crore eighty nine lakh forty three thousand two hundred twenty six`

### Hindu Arabic - Language Support
Currently only Nepali language is supported. This is because Nepali is my native language and I am familiar with the Nepalese writing and number system. Please feel free to contrubute to this project to support a language of your choice or provide me some info by creating a feature request in the issues section.
```html
<Number2Words value={14600728195} system={hinduArabic} language="np"/>
```
will output\
`चौध अर्ब साठ्ठी करोड सात लाख अठ्ठाइस हजार एक सय पन्चान्नब्बे`

#### Decimal Input
```html
<Number2Words value={26.54} system={hinduArabic} language="np"/>
```
will output\
`छब्बीस दशमलब पाँच चार`

## TODO
- Enable support additional languages
- Enable currency conversion

