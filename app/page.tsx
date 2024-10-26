// app/page.tsx
'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const countryData = {
  currencies: {
    Afghanistan: 'Afghan Afghani',
    Albania: 'Albanian Lek',
    Algeria: 'Algerian Dinar',
    Andorra: 'Euro',
    Angola: 'Angolan Kwanza',
    'Antigua and Barbuda': 'East Caribbean Dollar',
    Argentina: 'Argentine Peso',
    Armenia: 'Armenian Dram',
    Australia: 'Australian Dollar',
    Austria: 'Euro',
    Azerbaijan: 'Azerbaijani Manat',
    Bahamas: 'Bahamian Dollar',
    Bahrain: 'Bahraini Dinar',
    Bangladesh: 'Bangladeshi Taka',
    Barbados: 'Barbadian Dollar',
    Belarus: 'Belarusian Ruble',
    Belgium: 'Euro',
    Belize: 'Belize Dollar',
    Benin: 'West African CFA Franc',
    Bhutan: 'Bhutanese Ngultrum',
    Bolivia: 'Bolivian Boliviano',
    'Bosnia and Herzegovina': 'Bosnia and Herzegovina Convertible Mark',
    Botswana: 'Botswana Pula',
    Brazil: 'Brazilian Real',
    Brunei: 'Brunei Dollar',
    Bulgaria: 'Bulgarian Lev',
    'Burkina Faso': 'West African CFA Franc',
    Burundi: 'Burundi Franc',
    Cambodia: 'Cambodian Riel',
    Cameroon: 'Central African CFA Franc',
    Canada: 'Canadian Dollar',
    'Cape Verde': 'Cape Verdean Escudo',
    'Central African Republic': 'Central African CFA Franc',
    Chad: 'Central African CFA Franc',
    Chile: 'Chilean Peso',
    China: 'Chinese Yuan',
    Colombia: 'Colombian Peso',
    Comoros: 'Comorian Franc',
    Congo: 'Central African CFA Franc',
    'Costa Rica': 'Costa Rican Colón',
    Croatia: 'Euro',
    Cuba: 'Cuban Peso',
    Cyprus: 'Euro',
    'Czech Republic': 'Czech Koruna',
    'Democratic Republic of the Congo': 'Congolese Franc',
    Denmark: 'Danish Krone',
    Djibouti: 'Djiboutian Franc',
    Dominica: 'East Caribbean Dollar',
    'Dominican Republic': 'Dominican Peso',
    'East Timor': 'United States Dollar',
    Ecuador: 'United States Dollar',
    Egypt: 'Egyptian Pound',
    'El Salvador': 'United States Dollar',
    'Equatorial Guinea': 'Central African CFA Franc',
    Eritrea: 'Eritrean Nakfa',
    Estonia: 'Euro',
    Eswatini: 'Swazi Lilangeni',
    Ethiopia: 'Ethiopian Birr',
    Fiji: 'Fijian Dollar',
    Finland: 'Euro',
    France: 'Euro',
    Gabon: 'Central African CFA Franc',
    Gambia: 'Gambian Dalasi',
    Georgia: 'Georgian Lari',
    Germany: 'Euro',
    Ghana: 'Ghanaian Cedi',
    Greece: 'Euro',
    Grenada: 'East Caribbean Dollar',
    Guatemala: 'Guatemalan Quetzal',
    Guinea: 'Guinean Franc',
    'Guinea-Bissau': 'West African CFA Franc',
    Guyana: 'Guyanese Dollar',
    Haiti: 'Haitian Gourde',
    Honduras: 'Honduran Lempira',
    Hungary: 'Hungarian Forint',
    Iceland: 'Icelandic Króna',
    India: 'Indian Rupee',
    Indonesia: 'Indonesian Rupiah',
    Iran: 'Iranian Rial',
    Iraq: 'Iraqi Dinar',
    Ireland: 'Euro',
    Israel: 'Israeli New Shekel',
    Italy: 'Euro',
    'Ivory Coast': 'West African CFA Franc',
    Jamaica: 'Jamaican Dollar',
    Japan: 'Japanese Yen',
    Jordan: 'Jordanian Dinar',
    Kazakhstan: 'Kazakhstani Tenge',
    Kenya: 'Kenyan Shilling',
    Kiribati: 'Australian Dollar',
    Kuwait: 'Kuwaiti Dinar',
    Kyrgyzstan: 'Kyrgyzstani Som',
    Laos: 'Lao Kip',
    Latvia: 'Euro',
    Lebanon: 'Lebanese Pound',
    Lesotho: 'Lesotho Loti',
    Liberia: 'Liberian Dollar',
    Libya: 'Libyan Dinar',
    Liechtenstein: 'Swiss Franc',
    Lithuania: 'Euro',
    Luxembourg: 'Euro',
    Madagascar: 'Malagasy Ariary',
    Malawi: 'Malawian Kwacha',
    Malaysia: 'Malaysian Ringgit',
    Maldives: 'Maldivian Rufiyaa',
    Mali: 'West African CFA Franc',
    Malta: 'Euro',
    'Marshall Islands': 'United States Dollar',
    Mauritania: 'Mauritanian Ouguiya',
    Mauritius: 'Mauritian Rupee',
    Mexico: 'Mexican Peso',
    Micronesia: 'United States Dollar',
    Moldova: 'Moldovan Leu',
    Monaco: 'Euro',
    Mongolia: 'Mongolian Tögrög',
    Montenegro: 'Euro',
    Morocco: 'Moroccan Dirham',
    Mozambique: 'Mozambican Metical',
    Myanmar: 'Myanmar Kyat',
    Namibia: 'Namibian Dollar',
    Nauru: 'Australian Dollar',
    Nepal: 'Nepalese Rupee',
    Netherlands: 'Euro',
    'New Zealand': 'New Zealand Dollar',
    Nicaragua: 'Nicaraguan Córdoba',
    Niger: 'West African CFA Franc',
    Nigeria: 'Nigerian Naira',
    'North Korea': 'North Korean Won',
    'North Macedonia': 'Macedonian Denar',
    Norway: 'Norwegian Krone',
    Oman: 'Omani Rial',
    Pakistan: 'Pakistani Rupee',
    Palau: 'United States Dollar',
    Palestine: 'Israeli New Shekel',
    Panama: 'United States Dollar',
    'Papua New Guinea': 'Papua New Guinean Kina',
    Paraguay: 'Paraguayan Guaraní',
    Peru: 'Peruvian Sol',
    Philippines: 'Philippine Peso',
    Poland: 'Polish Złoty',
    Portugal: 'Euro',
    Qatar: 'Qatari Riyal',
    Romania: 'Romanian Leu',
    Russia: 'Russian Ruble',
    Rwanda: 'Rwandan Franc',
    'Saint Kitts and Nevis': 'East Caribbean Dollar',
    'Saint Lucia': 'East Caribbean Dollar',
    'Saint Vincent and the Grenadines': 'East Caribbean Dollar',
    Samoa: 'Samoan Tālā',
    'San Marino': 'Euro',
    'São Tomé and Príncipe': 'São Tomé and Príncipe Dobra',
    'Saudi Arabia': 'Saudi Riyal',
    Senegal: 'West African CFA Franc',
    Serbia: 'Serbian Dinar',
    Seychelles: 'Seychellois Rupee',
    'Sierra Leone': 'Sierra Leonean Leone',
    Singapore: 'Singapore Dollar',
    Slovakia: 'Euro',
    Slovenia: 'Euro',
    'Solomon Islands': 'Solomon Islands Dollar',
    Somalia: 'Somali Shilling',
    'South Africa': 'South African Rand',
    'South Korea': 'South Korean Won',
    'South Sudan': 'South Sudanese Pound',
    Spain: 'Euro',
    'Sri Lanka': 'Sri Lankan Rupee',
    Sudan: 'Sudanese Pound',
    Suriname: 'Surinamese Dollar',
    Sweden: 'Swedish Krona',
    Switzerland: 'Swiss Franc',
    Syria: 'Syrian Pound',
    Tajikistan: 'Tajikistani Somoni',
    Tanzania: 'Tanzanian Shilling',
    Thailand: 'Thai Baht',
    Togo: 'West African CFA Franc',
    Tonga: 'Tongan Paʻanga',
    'Trinidad and Tobago': 'Trinidad and Tobago Dollar',
    Tunisia: 'Tunisian Dinar',
    Turkey: 'Turkish Lira',
    Turkmenistan: 'Turkmenistan Manat',
    Tuvalu: 'Australian Dollar',
    Uganda: 'Ugandan Shilling',
    Ukraine: 'Ukrainian Hryvnia',
    'United Arab Emirates': 'United Arab Emirates Dirham',
    'United Kingdom': 'British Pound',
    'United States': 'United States Dollar',
    Uruguay: 'Uruguayan Peso',
    Uzbekistan: 'Uzbekistani Som',
    Vanuatu: 'Vanuatu Vatu',
    'Vatican City': 'Euro',
    Venezuela: 'Venezuelan Bolívar',
    Vietnam: 'Vietnamese Đồng',
    Yemen: 'Yemeni Rial',
    Zambia: 'Zambian Kwacha',
    Zimbabwe: 'RTGS Dollar',
  }, // Full data from first JSON
  payments: {
    Afghanistan: ['cash', 'bank transfer', 'mobile money'],
    Albania: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    Algeria: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Andorra: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    Angola: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile money',
    ],
    'Antigua and Barbuda': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
    ],
    Argentina: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
      'Mercado Pago',
    ],
    Armenia: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    Australia: [
      'cash',
      'credit cards',
      'debit cards',
      'EFTPOS',
      'PayPal',
      'bank transfer',
      'mobile payments',
      'BPAY',
    ],
    Austria: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
      'mobile payments',
      'PayPal',
    ],
    Azerbaijan: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Bahamas: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Bahrain: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    Bangladesh: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'bKash',
      'Rocket',
      'Nagad',
    ],
    Barbados: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Belarus: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    Belgium: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
      'Bancontact',
      'mobile payments',
    ],
    Belize: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Benin: ['cash', 'mobile money', 'bank transfer'],
    Bhutan: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Bolivia: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    'Bosnia and Herzegovina': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
    ],
    Botswana: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile money',
    ],
    Brazil: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'Pix',
      'Boleto',
      'mobile payments',
    ],
    Brunei: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Bulgaria: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    'Burkina Faso': ['cash', 'mobile money', 'bank transfer'],
    Burundi: ['cash', 'mobile money', 'bank transfer'],
    Cambodia: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    Cameroon: ['cash', 'mobile money', 'bank transfer'],
    Canada: [
      'cash',
      'credit cards',
      'debit cards',
      'Interac',
      'mobile payments',
      'PayPal',
      'bank transfer',
    ],
    'Cape Verde': ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    'Central African Republic': ['cash', 'mobile money', 'bank transfer'],
    Chad: ['cash', 'mobile money', 'bank transfer'],
    Chile: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'WebPay'],
    China: ['cash', 'UnionPay', 'Alipay', 'WeChat Pay', 'bank transfer'],
    Colombia: [
      'cash',
      'credit cards',
      'debit cards',
      'PSE',
      'bank transfer',
      'mobile payments',
    ],
    Comoros: ['cash', 'bank transfer'],
    Congo: ['cash', 'mobile money', 'bank transfer'],
    'Costa Rica': ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Croatia: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'SEPA'],
    Cuba: ['cash', 'bank transfer'],
    Cyprus: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'SEPA'],
    'Czech Republic': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    'Democratic Republic of the Congo': [
      'cash',
      'mobile money',
      'bank transfer',
    ],
    Denmark: [
      'cash',
      'credit cards',
      'debit cards',
      'MobilePay',
      'bank transfer',
      'SEPA',
    ],
    Djibouti: ['cash', 'bank transfer'],
    Dominica: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    'Dominican Republic': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
    ],
    'East Timor': ['cash', 'bank transfer'],
    Ecuador: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Egypt: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'Fawry',
      'mobile payments',
    ],
    'El Salvador': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'Bitcoin',
    ],
    'Equatorial Guinea': ['cash', 'mobile money', 'bank transfer'],
    Eritrea: ['cash', 'bank transfer'],
    Estonia: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
      'mobile payments',
    ],
    Eswatini: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile money',
    ],
    Ethiopia: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Fiji: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile money',
    ],
    Finland: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
      'mobile payments',
    ],
    France: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
      'Carte Bancaire',
      'mobile payments',
    ],
    Gabon: ['cash', 'mobile money', 'bank transfer'],
    Gambia: ['cash', 'mobile money', 'bank transfer'],
    Georgia: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Germany: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
      'Giropay',
      'SOFORT',
    ],
    Ghana: [
      'cash',
      'credit cards',
      'debit cards',
      'mobile money',
      'bank transfer',
    ],
    Greece: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'SEPA'],
    Grenada: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Guatemala: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Guinea: ['cash', 'mobile money', 'bank transfer'],
    'Guinea-Bissau': ['cash', 'mobile money', 'bank transfer'],
    Guyana: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Haiti: ['cash', 'mobile money', 'bank transfer'],
    Honduras: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Hungary: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Iceland: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    India: [
      'cash',
      'credit cards',
      'debit cards',
      'UPI',
      'NEFT',
      'IMPS',
      'mobile payments',
      'PayTM',
    ],
    Indonesia: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'GoPay',
      'OVO',
      'DANA',
    ],
    Iran: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Iraq: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Ireland: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'SEPA'],
    Israel: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Italy: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
      'PostePay',
    ],
    'Ivory Coast': ['cash', 'mobile money', 'bank transfer'],
    Jamaica: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Japan: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'Suica',
      'PASMO',
      'PayPay',
    ],
    Jordan: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Kazakhstan: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Kenya: ['cash', 'credit cards', 'debit cards', 'M-PESA', 'bank transfer'],
    Kiribati: ['cash', 'bank transfer'],
    Kuwait: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    Kyrgyzstan: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Laos: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Latvia: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'SEPA'],
    Lebanon: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Lesotho: ['cash', 'mobile money', 'bank transfer'],
    Liberia: ['cash', 'mobile money', 'bank transfer'],
    Libya: ['cash', 'bank transfer'],
    Liechtenstein: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
    ],
    Lithuania: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'SEPA'],
    Luxembourg: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
    ],
    Madagascar: ['cash', 'mobile money', 'bank transfer'],
    Malawi: ['cash', 'mobile money', 'bank transfer'],
    Malaysia: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'Touch n Go',
      'GrabPay',
    ],
    Maldives: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Mali: ['cash', 'mobile money', 'bank transfer'],
    Malta: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'SEPA'],
    'Marshall Islands': ['cash', 'bank transfer'],
    Mauritania: ['cash', 'mobile money', 'bank transfer'],
    Mauritius: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Mexico: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'OXXO',
      'SPEI',
    ],
    Micronesia: ['cash', 'bank transfer'],
    Moldova: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Monaco: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'SEPA'],
    Mongolia: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Montenegro: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Morocco: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Mozambique: ['cash', 'mobile money', 'bank transfer'],
    Myanmar: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile money',
    ],
    Namibia: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Nauru: ['cash', 'bank transfer'],
    Nepal: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile money',
    ],
    Netherlands: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
      'iDEAL',
    ],
    'New Zealand': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'EFTPOS',
    ],
    Nicaragua: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Niger: ['cash', 'mobile money', 'bank transfer'],
    Nigeria: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile money',
    ],
    'North Korea': ['cash'],
    'North Macedonia': ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Norway: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'Vipps'],
    Oman: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Pakistan: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile money',
      'JazzCash',
      'EasyPaisa',
    ],
    Palau: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Palestine: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Panama: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    'Papua New Guinea': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
    ],
    Paraguay: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Peru: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'Yape'],
    Philippines: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'GCash',
      'PayMaya',
    ],
    Poland: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'BLIK',
      'mobile payments',
    ],
    Portugal: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
      'MB WAY',
    ],
    Qatar: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Romania: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Russia: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'Mir',
      'mobile payments',
    ],
    Rwanda: ['cash', 'mobile money', 'bank transfer'],
    'Saint Kitts and Nevis': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
    ],
    'Saint Lucia': ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    'Saint Vincent and the Grenadines': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
    ],
    Samoa: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    'San Marino': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
    ],
    'São Tomé and Príncipe': ['cash', 'bank transfer'],
    'Saudi Arabia': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
      'mada',
    ],
    Senegal: ['cash', 'mobile money', 'bank transfer'],
    Serbia: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Seychelles: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    'Sierra Leone': ['cash', 'mobile money', 'bank transfer'],
    Singapore: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'PayNow',
      'GrabPay',
      'mobile payments',
    ],
    Slovakia: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'SEPA'],
    Slovenia: ['cash', 'credit cards', 'debit cards', 'bank transfer', 'SEPA'],
    'Solomon Islands': ['cash', 'bank transfer'],
    Somalia: ['cash', 'mobile money', 'bank transfer'],
    'South Africa': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
      'SnapScan',
      'Zapper',
    ],
    'South Korea': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'Kakao Pay',
      'Naver Pay',
      'mobile payments',
    ],
    'South Sudan': ['cash', 'mobile money', 'bank transfer'],
    Spain: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'SEPA',
      'Bizum',
    ],
    'Sri Lanka': ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Sudan: ['cash', 'bank transfer'],
    Suriname: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Sweden: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'Swish',
      'mobile payments',
    ],
    Switzerland: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'TWINT',
    ],
    Syria: ['cash', 'bank transfer'],
    Tajikistan: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Tanzania: ['cash', 'mobile money', 'bank transfer'],
    Thailand: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'PromptPay',
      'TrueMoney',
    ],
    Togo: ['cash', 'mobile money', 'bank transfer'],
    Tonga: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    'Trinidad and Tobago': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
    ],
    Tunisia: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Turkey: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    Turkmenistan: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Tuvalu: ['cash', 'bank transfer'],
    Uganda: ['cash', 'mobile money', 'bank transfer'],
    Ukraine: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    'United Arab Emirates': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    'United Kingdom': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
      'PayPal',
    ],
    'United States': [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
      'PayPal',
      'Venmo',
      'Zelle',
    ],
    Uruguay: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Uzbekistan: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Vanuatu: ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    'Vatican City': ['cash', 'credit cards', 'debit cards', 'bank transfer'],
    Venezuela: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'mobile payments',
    ],
    Vietnam: [
      'cash',
      'credit cards',
      'debit cards',
      'bank transfer',
      'MoMo',
      'VNPay',
      'ZaloPay',
    ],
    Yemen: ['cash', 'bank transfer'],
    Zambia: ['cash', 'mobile money', 'bank transfer'],
    Zimbabwe: ['cash', 'mobile money', 'bank transfer', 'EcoCash'],
  }, // Full data from second JSON
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('all');

  // Get unique payment methods for filter
  const allPaymentMethods = new Set<string>();
  Object.values(countryData.payments).forEach((methods) =>
    methods.forEach((method) => allPaymentMethods.add(method))
  );
  const uniquePaymentMethods = Array.from(allPaymentMethods).sort();

  // Filter and search countries
  const filteredCountries = Object.keys(countryData.currencies).filter(
    (country) => {
      const matchesSearch = country
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesPayment =
        paymentFilter === 'all' ||
        countryData.payments[country].includes(paymentFilter);
      return matchesSearch && matchesPayment;
    }
  );

  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Global Payment Systems Explorer
          </h1>
          <Alert>
            <AlertTitle>Comprehensive Payment Data</AlertTitle>
            <AlertDescription>
              Explore payment methods and currencies across 195 countries
            </AlertDescription>
          </Alert>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search countries..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select onValueChange={setPaymentFilter} defaultValue="all">
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Payment Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Payment Methods</SelectItem>
              {uniquePaymentMethods.map((method) => (
                <SelectItem key={method} value={method}>
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCountries.map((country) => (
            <Card key={country} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{country}</CardTitle>
                <CardDescription>
                  Currency: {countryData.currencies[country]}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      View Payment Methods
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{country} Payment Methods</DialogTitle>
                      <DialogDescription>
                        Available payment methods in {country}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {countryData.payments[country].map((method) => (
                        <Badge key={method} variant="secondary">
                          {method}
                        </Badge>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCountries.length === 0 && (
          <Alert className="mt-8">
            <AlertTitle>No countries found</AlertTitle>
            <AlertDescription>
              Try adjusting your search or filter criteria
            </AlertDescription>
          </Alert>
        )}
      </div>
    </main>
  );
}
