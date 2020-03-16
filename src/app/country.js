const countries =  [ 
   { 
      "text":"Afghanistan",
      "code":"AF",
      "value":"Afghanistan"
   },
   { 
      "text":"Åland Islands",
      "code":"AX",
      "value":"Åland Islands"
   },
   { 
      "text":"Albania",
      "code":"AL",
      "value":"Albania"
   },
   { 
      "text":"Algeria",
      "code":"DZ",
      "value":"Algeria"
   },
   { 
      "text":"American Samoa",
      "code":"AS",
      "value":"American Samoa"
   },
   { 
      "text":"AndorrA",
      "code":"AD",
      "value":"AndorrA"
   },
   { 
      "text":"Angola",
      "code":"AO",
      "value":"Angola"
   },
   { 
      "text":"Anguilla",
      "code":"AI",
      "value":"Anguilla"
   },
   { 
      "text":"Antarctica",
      "code":"AQ",
      "value":"Antarctica"
   },
   { 
      "text":"Antigua and Barbuda",
      "code":"AG",
      "value":"Antigua and Barbuda"
   },
   { 
      "text":"Argentina",
      "code":"AR",
      "value":"Argentina"
   },
   { 
      "text":"Armenia",
      "code":"AM",
      "value":"Armenia"
   },
   { 
      "text":"Aruba",
      "code":"AW",
      "value":"Aruba"
   },
   { 
      "text":"Australia",
      "code":"AU",
      "value":"Australia"
   },
   { 
      "text":"Austria",
      "code":"AT",
      "value":"Austria"
   },
   { 
      "text":"Azerbaijan",
      "code":"AZ",
      "value":"Azerbaijan"
   },
   { 
      "text":"Bahamas",
      "code":"BS",
      "value":"Bahamas"
   },
   { 
      "text":"Bahrain",
      "code":"BH",
      "value":"Bahrain"
   },
   { 
      "text":"Bangladesh",
      "code":"BD",
      "value":"Bangladesh"
   },
   { 
      "text":"Barbados",
      "code":"BB",
      "value":"Barbados"
   },
   { 
      "text":"Belarus",
      "code":"BY",
      "value":"Belarus"
   },
   { 
      "text":"Belgium",
      "code":"BE",
      "value":"Belgium"
   },
   { 
      "text":"Belize",
      "code":"BZ",
      "value":"Belize"
   },
   { 
      "text":"Benin",
      "code":"BJ",
      "value":"Benin"
   },
   { 
      "text":"Bermuda",
      "code":"BM",
      "value":"Bermuda"
   },
   { 
      "text":"Bhutan",
      "code":"BT",
      "value":"Bhutan"
   },
   { 
      "text":"Bolivia",
      "code":"BO",
      "value":"Bolivia"
   },
   { 
      "text":"Bosnia and Herzegovina",
      "code":"BA",
      "value":"Bosnia and Herzegovina"
   },
   { 
      "text":"Botswana",
      "code":"BW",
      "value":"Botswana"
   },
   { 
      "text":"Bouvet Island",
      "code":"BV",
      "value":"Bouvet Island"
   },
   { 
      "text":"Brazil",
      "code":"BR",
      "value":"Brazil"
   },
   { 
      "text":"British Indian Ocean Territory",
      "code":"IO",
      "value":"British Indian Ocean Territory"
   },
   { 
      "text":"Brunei Darussalam",
      "code":"BN",
      "value":"Brunei Darussalam"
   },
   { 
      "text":"Bulgaria",
      "code":"BG",
      "value":"Bulgaria"
   },
   { 
      "text":"Burkina Faso",
      "code":"BF",
      "value":"Burkina Faso"
   },
   { 
      "text":"Burundi",
      "code":"BI",
      "value":"Burundi"
   },
   { 
      "text":"Cambodia",
      "code":"KH",
      "value":"Cambodia"
   },
   { 
      "text":"Cameroon",
      "code":"CM",
      "value":"Cameroon"
   },
   { 
      "text":"Canada",
      "code":"CA",
      "value":"Canada"
   },
   { 
      "text":"Cape Verde",
      "code":"CV",
      "value":"Cape Verde"
   },
   { 
      "text":"Cayman Islands",
      "code":"KY",
      "value":"Cayman Islands"
   },
   { 
      "text":"Central African Republic",
      "code":"CF",
      "value":"Central African Republic"
   },
   { 
      "text":"Chad",
      "code":"TD",
      "value":"Chad"
   },
   { 
      "text":"Chile",
      "code":"CL",
      "value":"Chile"
   },
   { 
      "text":"China",
      "code":"CN",
      "value":"China"
   },
   { 
      "text":"Christmas Island",
      "code":"CX",
      "value":"Christmas Island"
   },
   { 
      "text":"Cocos (Keeling) Islands",
      "code":"CC",
      "value":"Cocos (Keeling) Islands"
   },
   { 
      "text":"Colombia",
      "code":"CO",
      "value":"Colombia"
   },
   { 
      "text":"Comoros",
      "code":"KM",
      "value":"Comoros"
   },
   { 
      "text":"Congo",
      "code":"CG",
      "value":"Congo"
   },
   { 
      "text":"Congo, The Democratic Republic of the",
      "code":"CD",
      "value":"Congo, The Democratic Republic of the"
   },
   { 
      "text":"Cook Islands",
      "code":"CK",
      "value":"Cook Islands"
   },
   { 
      "text":"Costa Rica",
      "code":"CR",
      "value":"Costa Rica"
   },
   { 
      "text":"Cote DIvoire",
      "code":"CI",
      "value":"Cote DIvoire"
   },
   { 
      "text":"Croatia",
      "code":"HR",
      "value":"Croatia"
   },
   { 
      "text":"Cuba",
      "code":"CU",
      "value":"Cuba"
   },
   { 
      "text":"Cyprus",
      "code":"CY",
      "value":"Cyprus"
   },
   { 
      "text":"Czech Republic",
      "code":"CZ",
      "value":"Czech Republic"
   },
   { 
      "text":"Denmark",
      "code":"DK",
      "value":"Denmark"
   },
   { 
      "text":"Djibouti",
      "code":"DJ",
      "value":"Djibouti"
   },
   { 
      "text":"Dominica",
      "code":"DM",
      "value":"Dominica"
   },
   { 
      "text":"Dominican Republic",
      "code":"DO",
      "value":"Dominican Republic"
   },
   { 
      "text":"Ecuador",
      "code":"EC",
      "value":"Ecuador"
   },
   { 
      "text":"Egypt",
      "code":"EG",
      "value":"Egypt"
   },
   { 
      "text":"El Salvador",
      "code":"SV",
      "value":"El Salvador"
   },
   { 
      "text":"Equatorial Guinea",
      "code":"GQ",
      "value":"Equatorial Guinea"
   },
   { 
      "text":"Eritrea",
      "code":"ER",
      "value":"Eritrea"
   },
   { 
      "text":"Estonia",
      "code":"EE",
      "value":"Estonia"
   },
   { 
      "text":"Ethiopia",
      "code":"ET",
      "value":"Ethiopia"
   },
   { 
      "text":"Falkland Islands (Malvinas)",
      "code":"FK",
      "value":"Falkland Islands (Malvinas)"
   },
   { 
      "text":"Faroe Islands",
      "code":"FO",
      "value":"Faroe Islands"
   },
   { 
      "text":"Fiji",
      "code":"FJ",
      "value":"Fiji"
   },
   { 
      "text":"Finland",
      "code":"FI",
      "value":"Finland"
   },
   { 
      "text":"France",
      "code":"FR",
      "value":"France"
   },
   { 
      "text":"French Guiana",
      "code":"GF",
      "value":"French Guiana"
   },
   { 
      "text":"French Polynesia",
      "code":"PF",
      "value":"French Polynesia"
   },
   { 
      "text":"French Southern Territories",
      "code":"TF",
      "value":"French Southern Territories"
   },
   { 
      "text":"Gabon",
      "code":"GA",
      "value":"Gabon"
   },
   { 
      "text":"Gambia",
      "code":"GM",
      "value":"Gambia"
   },
   { 
      "text":"Georgia",
      "code":"GE",
      "value":"Georgia"
   },
   { 
      "text":"Germany",
      "code":"DE",
      "value":"Germany"
   },
   { 
      "text":"Ghana",
      "code":"GH",
      "value":"Ghana"
   },
   { 
      "text":"Gibraltar",
      "code":"GI",
      "value":"Gibraltar"
   },
   { 
      "text":"Greece",
      "code":"GR",
      "value":"Greece"
   },
   { 
      "text":"Greenland",
      "code":"GL",
      "value":"Greenland"
   },
   { 
      "text":"Grenada",
      "code":"GD",
      "value":"Grenada"
   },
   { 
      "text":"Guadeloupe",
      "code":"GP",
      "value":"Guadeloupe"
   },
   { 
      "text":"Guam",
      "code":"GU",
      "value":"Guam"
   },
   { 
      "text":"Guatemala",
      "code":"GT",
      "value":"Guatemala"
   },
   { 
      "text":"Guernsey",
      "code":"GG",
      "value":"Guernsey"
   },
   { 
      "text":"Guinea",
      "code":"GN",
      "value":"Guinea"
   },
   { 
      "text":"Guinea-Bissau",
      "code":"GW",
      "value":"Guinea-Bissau"
   },
   { 
      "text":"Guyana",
      "code":"GY",
      "value":"Guyana"
   },
   { 
      "text":"Haiti",
      "code":"HT",
      "value":"Haiti"
   },
   { 
      "text":"Heard Island and Mcdonald Islands",
      "code":"HM",
      "value":"Heard Island and Mcdonald Islands"
   },
   { 
      "text":"Holy See (Vatican City State)",
      "code":"VA",
      "value":"Holy See (Vatican City State)"
   },
   { 
      "text":"Honduras",
      "code":"HN",
      "value":"Honduras"
   },
   { 
      "text":"Hong Kong",
      "code":"HK",
      "value":"Hong Kong"
   },
   { 
      "text":"Hungary",
      "code":"HU",
      "value":"Hungary"
   },
   { 
      "text":"Iceland",
      "code":"IS",
      "value":"Iceland"
   },
   { 
      "text":"India",
      "code":"IN",
      "value":"India"
   },
   { 
      "text":"Indonesia",
      "code":"ID",
      "value":"Indonesia"
   },
   { 
      "text":"Iran, Islamic Republic Of",
      "code":"IR",
      "value":"Iran, Islamic Republic Of"
   },
   { 
      "text":"Iraq",
      "code":"IQ",
      "value":"Iraq"
   },
   { 
      "text":"Ireland",
      "code":"IE",
      "value":"Ireland"
   },
   { 
      "text":"Isle of Man",
      "code":"IM",
      "value":"Isle of Man"
   },
   { 
      "text":"Israel",
      "code":"IL",
      "value":"Israel"
   },
   { 
      "text":"Italy",
      "code":"IT",
      "value":"Italy"
   },
   { 
      "text":"Jamaica",
      "code":"JM",
      "value":"Jamaica"
   },
   { 
      "text":"Japan",
      "code":"JP",
      "value":"Japan"
   },
   { 
      "text":"Jersey",
      "code":"JE",
      "value":"Jersey"
   },
   { 
      "text":"Jordan",
      "code":"JO",
      "value":"Jordan"
   },
   { 
      "text":"Kazakhstan",
      "code":"KZ",
      "value":"Kazakhstan"
   },
   { 
      "text":"Kenya",
      "code":"KE",
      "value":"Kenya"
   },
   { 
      "text":"Kiribati",
      "code":"KI",
      "value":"Kiribati"
   },
   { 
      "text":"Korea, Democratic People'S Republic of",
      "code":"KP",
      "value":"Korea, Democratic People'S Republic of"
   },
   { 
      "text":"Korea, Republic of",
      "code":"KR",
      "value":"Korea, Republic of"
   },
   { 
      "text":"Kuwait",
      "code":"KW",
      "value":"Kuwait"
   },
   { 
      "text":"Kyrgyzstan",
      "code":"KG",
      "value":"Kyrgyzstan"
   },
   { 
      "text":"Lao People'S Democratic Republic",
      "code":"LA",
      "value":"Lao People'S Democratic Republic"
   },
   { 
      "text":"Latvia",
      "code":"LV",
      "value":"Latvia"
   },
   { 
      "text":"Lebanon",
      "code":"LB",
      "value":"Lebanon"
   },
   { 
      "text":"Lesotho",
      "code":"LS",
      "value":"Lesotho"
   },
   { 
      "text":"Liberia",
      "code":"LR",
      "value":"Liberia"
   },
   { 
      "text":"Libyan Arab Jamahiriya",
      "code":"LY",
      "value":"Libyan Arab Jamahiriya"
   },
   { 
      "text":"Liechtenstein",
      "code":"LI",
      "value":"Liechtenstein"
   },
   { 
      "text":"Lithuania",
      "code":"LT",
      "value":"Lithuania"
   },
   { 
      "text":"Luxembourg",
      "code":"LU",
      "value":"Luxembourg"
   },
   { 
      "text":"Macao",
      "code":"MO",
      "value":"Macao"
   },
   { 
      "text":"Macedonia, The Former Yugoslav Republic of",
      "code":"MK",
      "value":"Macedonia, The Former Yugoslav Republic of"
   },
   { 
      "text":"Madagascar",
      "code":"MG",
      "value":"Madagascar"
   },
   { 
      "text":"Malawi",
      "code":"MW",
      "value":"Malawi"
   },
   { 
      "text":"Malaysia",
      "code":"MY",
      "value":"Malaysia"
   },
   { 
      "text":"Maldives",
      "code":"MV",
      "value":"Maldives"
   },
   { 
      "text":"Mali",
      "code":"ML",
      "value":"Mali"
   },
   { 
      "text":"Malta",
      "code":"MT",
      "value":"Malta"
   },
   { 
      "text":"Marshall Islands",
      "code":"MH",
      "value":"Marshall Islands"
   },
   { 
      "text":"Martinique",
      "code":"MQ",
      "value":"Martinique"
   },
   { 
      "text":"Mauritania",
      "code":"MR",
      "value":"Mauritania"
   },
   { 
      "text":"Mauritius",
      "code":"MU",
      "value":"Mauritius"
   },
   { 
      "text":"Mayotte",
      "code":"YT",
      "value":"Mayotte"
   },
   { 
      "text":"Mexico",
      "code":"MX",
      "value":"Mexico"
   },
   { 
      "text":"Micronesia, Federated States of",
      "code":"FM",
      "value":"Micronesia, Federated States of"
   },
   { 
      "text":"Moldova, Republic of",
      "code":"MD",
      "value":"Moldova, Republic of"
   },
   { 
      "text":"Monaco",
      "code":"MC",
      "value":"Monaco"
   },
   { 
      "text":"Mongolia",
      "code":"MN",
      "value":"Mongolia"
   },
   { 
      "text":"Montserrat",
      "code":"MS",
      "value":"Montserrat"
   },
   { 
      "text":"Morocco",
      "code":"MA",
      "value":"Morocco"
   },
   { 
      "text":"Mozambique",
      "code":"MZ",
      "value":"Mozambique"
   },
   { 
      "text":"Myanmar",
      "code":"MM",
      "value":"Myanmar"
   },
   { 
      "text":"Namibia",
      "code":"NA",
      "value":"Namibia"
   },
   { 
      "text":"Nauru",
      "code":"NR",
      "value":"Nauru"
   },
   { 
      "text":"Nepal",
      "code":"NP",
      "value":"Nepal"
   },
   { 
      "text":"Netherlands",
      "code":"NL",
      "value":"Netherlands"
   },
   { 
      "text":"Netherlands Antilles",
      "code":"AN",
      "value":"Netherlands Antilles"
   },
   { 
      "text":"New Caledonia",
      "code":"NC",
      "value":"New Caledonia"
   },
   { 
      "text":"New Zealand",
      "code":"NZ",
      "value":"New Zealand"
   },
   { 
      "text":"Nicaragua",
      "code":"NI",
      "value":"Nicaragua"
   },
   { 
      "text":"Niger",
      "code":"NE",
      "value":"Niger"
   },
   { 
      "text":"Nigeria",
      "code":"NG",
      "value":"Nigeria"
   },
   { 
      "text":"Niue",
      "code":"NU",
      "value":"Niue"
   },
   { 
      "text":"Norfolk Island",
      "code":"NF",
      "value":"Norfolk Island"
   },
   { 
      "text":"Northern Mariana Islands",
      "code":"MP",
      "value":"Northern Mariana Islands"
   },
   { 
      "text":"Norway",
      "code":"NO",
      "value":"Norway"
   },
   { 
      "text":"Oman",
      "code":"OM",
      "value":"Oman"
   },
   { 
      "text":"Pakistan",
      "code":"PK",
      "value":"Pakistan"
   },
   { 
      "text":"Palau",
      "code":"PW",
      "value":"Palau"
   },
   { 
      "text":"Palestinian Territory, Occupied",
      "code":"PS",
      "value":"Palestinian Territory, Occupied"
   },
   { 
      "text":"Panama",
      "code":"PA",
      "value":"Panama"
   },
   { 
      "text":"Papua New Guinea",
      "code":"PG",
      "value":"Papua New Guinea"
   },
   { 
      "text":"Paraguay",
      "code":"PY",
      "value":"Paraguay"
   },
   { 
      "text":"Peru",
      "code":"PE",
      "value":"Peru"
   },
   { 
      "text":"Philippines",
      "code":"PH",
      "value":"Philippines"
   },
   { 
      "text":"Pitcairn",
      "code":"PN",
      "value":"Pitcairn"
   },
   { 
      "text":"Poland",
      "code":"PL",
      "value":"Poland"
   },
   { 
      "text":"Portugal",
      "code":"PT",
      "value":"Portugal"
   },
   { 
      "text":"Puerto Rico",
      "code":"PR",
      "value":"Puerto Rico"
   },
   { 
      "text":"Qatar",
      "code":"QA",
      "value":"Qatar"
   },
   { 
      "text":"Reunion",
      "code":"RE",
      "value":"Reunion"
   },
   { 
      "text":"Romania",
      "code":"RO",
      "value":"Romania"
   },
   { 
      "text":"Russian Federation",
      "code":"RU",
      "value":"Russian Federation"
   },
   { 
      "text":"RWANDA",
      "code":"RW",
      "value":"RWANDA"
   },
   { 
      "text":"Saint Helena",
      "code":"SH",
      "value":"Saint Helena"
   },
   { 
      "text":"Saint Kitts and Nevis",
      "code":"KN",
      "value":"Saint Kitts and Nevis"
   },
   { 
      "text":"Saint Lucia",
      "code":"LC",
      "value":"Saint Lucia"
   },
   { 
      "text":"Saint Pierre and Miquelon",
      "code":"PM",
      "value":"Saint Pierre and Miquelon"
   },
   { 
      "text":"Saint Vincent and the Grenadines",
      "code":"VC",
      "value":"Saint Vincent and the Grenadines"
   },
   { 
      "text":"Samoa",
      "code":"WS",
      "value":"Samoa"
   },
   { 
      "text":"San Marino",
      "code":"SM",
      "value":"San Marino"
   },
   { 
      "text":"Sao Tome and Principe",
      "code":"ST",
      "value":"Sao Tome and Principe"
   },
   { 
      "text":"Saudi Arabia",
      "code":"SA",
      "value":"Saudi Arabia"
   },
   { 
      "text":"Senegal",
      "code":"SN",
      "value":"Senegal"
   },
   { 
      "text":"Serbia and Montenegro",
      "code":"CS",
      "value":"Serbia and Montenegro"
   },
   { 
      "text":"Seychelles",
      "code":"SC",
      "value":"Seychelles"
   },
   { 
      "text":"Sierra Leone",
      "code":"SL",
      "value":"Sierra Leone"
   },
   { 
      "text":"Singapore",
      "code":"SG",
      "value":"Singapore"
   },
   { 
      "text":"Slovakia",
      "code":"SK",
      "value":"Slovakia"
   },
   { 
      "text":"Slovenia",
      "code":"SI",
      "value":"Slovenia"
   },
   { 
      "text":"Solomon Islands",
      "code":"SB",
      "value":"Solomon Islands"
   },
   { 
      "text":"Somalia",
      "code":"SO",
      "value":"Somalia"
   },
   { 
      "text":"South Africa",
      "code":"ZA",
      "value":"South Africa"
   },
   { 
      "text":"South Georgia and the South Sandwich Islands",
      "code":"GS",
      "value":"South Georgia and the South Sandwich Islands"
   },
   { 
      "text":"Spain",
      "code":"ES",
      "value":"Spain"
   },
   { 
      "text":"Sri Lanka",
      "code":"LK",
      "value":"Sri Lanka"
   },
   { 
      "text":"Sudan",
      "code":"SD",
      "value":"Sudan"
   },
   { 
      "text":"Suriname",
      "code":"SR",
      "value":"Suriname"
   },
   { 
      "text":"Svalbard and Jan Mayen",
      "code":"SJ",
      "value":"Svalbard and Jan Mayen"
   },
   { 
      "text":"Swaziland",
      "code":"SZ",
      "value":"Swaziland"
   },
   { 
      "text":"Sweden",
      "code":"SE",
      "value":"Sweden"
   },
   { 
      "text":"Switzerland",
      "code":"CH",
      "value":"Switzerland"
   },
   { 
      "text":"Syrian Arab Republic",
      "code":"SY",
      "value":"Syrian Arab Republic"
   },
   { 
      "text":"Taiwan, Province of China",
      "code":"TW",
      "value":"Taiwan, Province of China"
   },
   { 
      "text":"Tajikistan",
      "code":"TJ",
      "value":"Tajikistan"
   },
   { 
      "text":"Tanzania, United Republic of",
      "code":"TZ",
      "value":"Tanzania, United Republic of"
   },
   { 
      "text":"Thailand",
      "code":"TH",
      "value":"Thailand"
   },
   { 
      "text":"Timor-Leste",
      "code":"TL",
      "value":"Timor-Leste"
   },
   { 
      "text":"Togo",
      "code":"TG",
      "value":"Togo"
   },
   { 
      "text":"Tokelau",
      "code":"TK",
      "value":"Tokelau"
   },
   { 
      "text":"Tonga",
      "code":"TO",
      "value":"Tonga"
   },
   { 
      "text":"Trinidad and Tobago",
      "code":"TT",
      "value":"Trinidad and Tobago"
   },
   { 
      "text":"Tunisia",
      "code":"TN",
      "value":"Tunisia"
   },
   { 
      "text":"Turkey",
      "code":"TR",
      "value":"Turkey"
   },
   { 
      "text":"Turkmenistan",
      "code":"TM",
      "value":"Turkmenistan"
   },
   { 
      "text":"Turks and Caicos Islands",
      "code":"TC",
      "value":"Turks and Caicos Islands"
   },
   { 
      "text":"Tuvalu",
      "code":"TV",
      "value":"Tuvalu"
   },
   { 
      "text":"Uganda",
      "code":"UG",
      "value":"Uganda"
   },
   { 
      "text":"Ukraine",
      "code":"UA",
      "value":"Ukraine"
   },
   { 
      "text":"United Arab Emirates",
      "code":"AE",
      "value":"United Arab Emirates"
   },
   { 
      "text":"United Kingdom",
      "code":"GB",
      "value":"United Kingdom"
   },
   { 
      "text":"United States",
      "code":"US",
      "value":"United States"
   },
   { 
      "text":"United States Minor Outlying Islands",
      "code":"UM",
      "value":"United States Minor Outlying Islands"
   },
   { 
      "text":"Uruguay",
      "code":"UY",
      "value":"Uruguay"
   },
   { 
      "text":"Uzbekistan",
      "code":"UZ",
      "value":"Uzbekistan"
   },
   { 
      "text":"Vanuatu",
      "code":"VU",
      "value":"Vanuatu"
   },
   { 
      "text":"Venezuela",
      "code":"VE",
      "value":"Venezuela"
   },
   { 
      "text":"Viet Nam",
      "code":"VN",
      "value":"Viet Nam"
   },
   { 
      "text":"Virgin Islands, British",
      "code":"VG",
      "value":"Virgin Islands, British"
   },
   { 
      "text":"Virgin Islands, U.S.",
      "code":"VI",
      "value":"Virgin Islands, U.S."
   },
   { 
      "text":"Wallis and Futuna",
      "code":"WF",
      "value":"Wallis and Futuna"
   },
   { 
      "text":"Western Sahara",
      "code":"EH",
      "value":"Western Sahara"
   },
   { 
      "text":"Yemen",
      "code":"YE",
      "value":"Yemen"
   },
   { 
      "text":"Zambia",
      "code":"ZM",
      "value":"Zambia"
   },
   { 
      "text":"Zimbabwe",
      "code":"ZW",
      "value":"Zimbabwe"
   }
]
export default countries;