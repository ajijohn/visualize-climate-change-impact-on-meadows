var JulianDate = {1: '1/1',
 2: '1/2',
 3: '1/3',
 4: '1/4',
 5: '1/5',
 6: '1/6',
 7: '1/7',
 8: '1/8',
 9: '1/9',
 10: '1/10',
 11: '1/11',
 12: '1/12',
 13: '1/13',
 14: '1/14',
 15: '1/15',
 16: '1/16',
 17: '1/17',
 18: '1/18',
 19: '1/19',
 20: '1/20',
 21: '1/21',
 22: '1/22',
 23: '1/23',
 24: '1/24',
 25: '1/25',
 26: '1/26',
 27: '1/27',
 28: '1/28',
 29: '1/29',
 30: '1/30',
 31: '1/31',
 32: '2/1',
 33: '2/2',
 34: '2/3',
 35: '2/4',
 36: '2/5',
 37: '2/6',
 38: '2/7',
 39: '2/8',
 40: '2/9',
 41: '2/10',
 42: '2/11',
 43: '2/12',
 44: '2/13',
 45: '2/14',
 46: '2/15',
 47: '2/16',
 48: '2/17',
 49: '2/18',
 50: '2/19',
 51: '2/20',
 52: '2/21',
 53: '2/22',
 54: '2/23',
 55: '2/24',
 56: '2/25',
 57: '2/26',
 58: '2/27',
 59: '2/28',
 60: '3/1',
 61: '3/2',
 62: '3/3',
 63: '3/4',
 64: '3/5',
 65: '3/6',
 66: '3/7',
 67: '3/8',
 68: '3/9',
 69: '3/10',
 70: '3/11',
 71: '3/12',
 72: '3/13',
 73: '3/14',
 74: '3/15',
 75: '3/16',
 76: '3/17',
 77: '3/18',
 78: '3/19',
 79: '3/20',
 80: '3/21',
 81: '3/22',
 82: '3/23',
 83: '3/24',
 84: '3/25',
 85: '3/26',
 86: '3/27',
 87: '3/28',
 88: '3/29',
 89: '3/30',
 90: '3/31',
 91: '4/1',
 92: '4/2',
 93: '4/3',
 94: '4/4',
 95: '4/5',
 96: '4/6',
 97: '4/7',
 98: '4/8',
 99: '4/9',
 100: '4/10',
 101: '4/11',
 102: '4/12',
 103: '4/13',
 104: '4/14',
 105: '4/15',
 106: '4/16',
 107: '4/17',
 108: '4/18',
 109: '4/19',
 110: '4/20',
 111: '4/21',
 112: '4/22',
 113: '4/23',
 114: '4/24',
 115: '4/25',
 116: '4/26',
 117: '4/27',
 118: '4/28',
 119: '4/29',
 120: '4/30',
 121: '5/1',
 122: '5/2',
 123: '5/3',
 124: '5/4',
 125: '5/5',
 126: '5/6',
 127: '5/7',
 128: '5/8',
 129: '5/9',
 130: '5/10',
 131: '5/11',
 132: '5/12',
 133: '5/13',
 134: '5/14',
 135: '5/15',
 136: '5/16',
 137: '5/17',
 138: '5/18',
 139: '5/19',
 140: '5/20',
 141: '5/21',
 142: '5/22',
 143: '5/23',
 144: '5/24',
 145: '5/25',
 146: '5/26',
 147: '5/27',
 148: '5/28',
 149: '5/29',
 150: '5/30',
 151: '5/31',
 152: '6/1',
 153: '6/2',
 154: '6/3',
 155: '6/4',
 156: '6/5',
 157: '6/6',
 158: '6/7',
 159: '6/8',
 160: '6/9',
 161: '6/10',
 162: '6/11',
 163: '6/12',
 164: '6/13',
 165: '6/14',
 166: '6/15',
 167: '6/16',
 168: '6/17',
 169: '6/18',
 170: '6/19',
 171: '6/20',
 172: '6/21',
 173: '6/22',
 174: '6/23',
 175: '6/24',
 176: '6/25',
 177: '6/26',
 178: '6/27',
 179: '6/28',
 180: '6/29',
 181: '6/30',
 182: '7/1',
 183: '7/2',
 184: '7/3',
 185: '7/4',
 186: '7/5',
 187: '7/6',
 188: '7/7',
 189: '7/8',
 190: '7/9',
 191: '7/10',
 192: '7/11',
 193: '7/12',
 194: '7/13',
 195: '7/14',
 196: '7/15',
 197: '7/16',
 198: '7/17',
 199: '7/18',
 200: '7/19',
 201: '7/20',
 202: '7/21',
 203: '7/22',
 204: '7/23',
 205: '7/24',
 206: '7/25',
 207: '7/26',
 208: '7/27',
 209: '7/28',
 210: '7/29',
 211: '7/30',
 212: '7/31',
 213: '8/1',
 214: '8/2',
 215: '8/3',
 216: '8/4',
 217: '8/5',
 218: '8/6',
 219: '8/7',
 220: '8/8',
 221: '8/9',
 222: '8/10',
 223: '8/11',
 224: '8/12',
 225: '8/13',
 226: '8/14',
 227: '8/15',
 228: '8/16',
 229: '8/17',
 230: '8/18',
 231: '8/19',
 232: '8/20',
 233: '8/21',
 234: '8/22',
 235: '8/23',
 236: '8/24',
 237: '8/25',
 238: '8/26',
 239: '8/27',
 240: '8/28',
 241: '8/29',
 242: '8/30',
 243: '8/31',
 244: '9/1',
 245: '9/2',
 246: '9/3',
 247: '9/4',
 248: '9/5',
 249: '9/6',
 250: '9/7',
 251: '9/8',
 252: '9/9',
 253: '9/10',
 254: '9/11',
 255: '9/12',
 256: '9/13',
 257: '9/14',
 258: '9/15',
 259: '9/16',
 260: '9/17',
 261: '9/18',
 262: '9/19',
 263: '9/20',
 264: '9/21',
 265: '9/22',
 266: '9/23',
 267: '9/24',
 268: '9/25',
 269: '9/26',
 270: '9/27',
 271: '9/28',
 272: '9/29',
 273: '9/30',
 274: '10/1',
 275: '10/2',
 276: '10/3',
 277: '10/4',
 278: '10/5',
 279: '10/6',
 280: '10/7',
 281: '10/8',
 282: '10/9',
 283: '10/10',
 284: '10/11',
 285: '10/12',
 286: '10/13',
 287: '10/14',
 288: '10/15',
 289: '10/16',
 290: '10/17',
 291: '10/18',
 292: '10/19',
 293: '10/20',
 294: '10/21',
 295: '10/22',
 296: '10/23',
 297: '10/24',
 298: '10/25',
 299: '10/26',
 300: '10/27',
 301: '10/28',
 302: '10/29',
 303: '10/30',
 304: '10/31',
 305: '11/1',
 306: '11/2',
 307: '11/3',
 308: '11/4',
 309: '11/5',
 310: '11/6',
 311: '11/7',
 312: '11/8',
 313: '11/9',
 314: '11/10',
 315: '11/11',
 316: '11/12',
 317: '11/13',
 318: '11/14',
 319: '11/15',
 320: '11/16',
 321: '11/17',
 322: '11/18',
 323: '11/19',
 324: '11/20',
 325: '11/21',
 326: '11/22',
 327: '11/23',
 328: '11/24',
 329: '11/25',
 330: '11/26',
 331: '11/27',
 332: '11/28',
 333: '11/29',
 334: '11/30',
 335: '12/1',
 336: '12/2',
 337: '12/3',
 338: '12/4',
 339: '12/5',
 340: '12/6',
 341: '12/7',
 342: '12/8',
 343: '12/9',
 344: '12/10',
 345: '12/11',
 346: '12/12',
 347: '12/13',
 348: '12/14',
 349: '12/15',
 350: '12/16',
 351: '12/17',
 352: '12/18',
 353: '12/19',
 354: '12/20',
 355: '12/21',
 356: '12/22',
 357: '12/23',
 358: '12/24',
 359: '12/25',
 360: '12/26',
 361: '12/27',
 362: '12/28',
 363: '12/29',
 364: '12/30',
 365: '12/31'}


var DateJulian = {'1/1': 1,
 '1/10': 10,
 '1/11': 11,
 '1/12': 12,
 '1/13': 13,
 '1/14': 14,
 '1/15': 15,
 '1/16': 16,
 '1/17': 17,
 '1/18': 18,
 '1/19': 19,
 '1/2': 2,
 '1/20': 20,
 '1/21': 21,
 '1/22': 22,
 '1/23': 23,
 '1/24': 24,
 '1/25': 25,
 '1/26': 26,
 '1/27': 27,
 '1/28': 28,
 '1/29': 29,
 '1/3': 3,
 '1/30': 30,
 '1/31': 31,
 '1/4': 4,
 '1/5': 5,
 '1/6': 6,
 '1/7': 7,
 '1/8': 8,
 '1/9': 9,
 '10/1': 274,
 '10/10': 283,
 '10/11': 284,
 '10/12': 285,
 '10/13': 286,
 '10/14': 287,
 '10/15': 288,
 '10/16': 289,
 '10/17': 290,
 '10/18': 291,
 '10/19': 292,
 '10/2': 275,
 '10/20': 293,
 '10/21': 294,
 '10/22': 295,
 '10/23': 296,
 '10/24': 297,
 '10/25': 298,
 '10/26': 299,
 '10/27': 300,
 '10/28': 301,
 '10/29': 302,
 '10/3': 276,
 '10/30': 303,
 '10/31': 304,
 '10/4': 277,
 '10/5': 278,
 '10/6': 279,
 '10/7': 280,
 '10/8': 281,
 '10/9': 282,
 '11/1': 305,
 '11/10': 314,
 '11/11': 315,
 '11/12': 316,
 '11/13': 317,
 '11/14': 318,
 '11/15': 319,
 '11/16': 320,
 '11/17': 321,
 '11/18': 322,
 '11/19': 323,
 '11/2': 306,
 '11/20': 324,
 '11/21': 325,
 '11/22': 326,
 '11/23': 327,
 '11/24': 328,
 '11/25': 329,
 '11/26': 330,
 '11/27': 331,
 '11/28': 332,
 '11/29': 333,
 '11/3': 307,
 '11/30': 334,
 '11/4': 308,
 '11/5': 309,
 '11/6': 310,
 '11/7': 311,
 '11/8': 312,
 '11/9': 313,
 '12/1': 335,
 '12/10': 344,
 '12/11': 345,
 '12/12': 346,
 '12/13': 347,
 '12/14': 348,
 '12/15': 349,
 '12/16': 350,
 '12/17': 351,
 '12/18': 352,
 '12/19': 353,
 '12/2': 336,
 '12/20': 354,
 '12/21': 355,
 '12/22': 356,
 '12/23': 357,
 '12/24': 358,
 '12/25': 359,
 '12/26': 360,
 '12/27': 361,
 '12/28': 362,
 '12/29': 363,
 '12/3': 337,
 '12/30': 364,
 '12/31': 365,
 '12/4': 338,
 '12/5': 339,
 '12/6': 340,
 '12/7': 341,
 '12/8': 342,
 '12/9': 343,
 '2/1': 32,
 '2/10': 41,
 '2/11': 42,
 '2/12': 43,
 '2/13': 44,
 '2/14': 45,
 '2/15': 46,
 '2/16': 47,
 '2/17': 48,
 '2/18': 49,
 '2/19': 50,
 '2/2': 33,
 '2/20': 51,
 '2/21': 52,
 '2/22': 53,
 '2/23': 54,
 '2/24': 55,
 '2/25': 56,
 '2/26': 57,
 '2/27': 58,
 '2/28': 59,
 '2/3': 34,
 '2/4': 35,
 '2/5': 36,
 '2/6': 37,
 '2/7': 38,
 '2/8': 39,
 '2/9': 40,
 '3/1': 60,
 '3/10': 69,
 '3/11': 70,
 '3/12': 71,
 '3/13': 72,
 '3/14': 73,
 '3/15': 74,
 '3/16': 75,
 '3/17': 76,
 '3/18': 77,
 '3/19': 78,
 '3/2': 61,
 '3/20': 79,
 '3/21': 80,
 '3/22': 81,
 '3/23': 82,
 '3/24': 83,
 '3/25': 84,
 '3/26': 85,
 '3/27': 86,
 '3/28': 87,
 '3/29': 88,
 '3/3': 62,
 '3/30': 89,
 '3/31': 90,
 '3/4': 63,
 '3/5': 64,
 '3/6': 65,
 '3/7': 66,
 '3/8': 67,
 '3/9': 68,
 '4/1': 91,
 '4/10': 100,
 '4/11': 101,
 '4/12': 102,
 '4/13': 103,
 '4/14': 104,
 '4/15': 105,
 '4/16': 106,
 '4/17': 107,
 '4/18': 108,
 '4/19': 109,
 '4/2': 92,
 '4/20': 110,
 '4/21': 111,
 '4/22': 112,
 '4/23': 113,
 '4/24': 114,
 '4/25': 115,
 '4/26': 116,
 '4/27': 117,
 '4/28': 118,
 '4/29': 119,
 '4/3': 93,
 '4/30': 120,
 '4/4': 94,
 '4/5': 95,
 '4/6': 96,
 '4/7': 97,
 '4/8': 98,
 '4/9': 99,
 '5/1': 121,
 '5/10': 130,
 '5/11': 131,
 '5/12': 132,
 '5/13': 133,
 '5/14': 134,
 '5/15': 135,
 '5/16': 136,
 '5/17': 137,
 '5/18': 138,
 '5/19': 139,
 '5/2': 122,
 '5/20': 140,
 '5/21': 141,
 '5/22': 142,
 '5/23': 143,
 '5/24': 144,
 '5/25': 145,
 '5/26': 146,
 '5/27': 147,
 '5/28': 148,
 '5/29': 149,
 '5/3': 123,
 '5/30': 150,
 '5/31': 151,
 '5/4': 124,
 '5/5': 125,
 '5/6': 126,
 '5/7': 127,
 '5/8': 128,
 '5/9': 129,
 '6/1': 152,
 '6/10': 161,
 '6/11': 162,
 '6/12': 163,
 '6/13': 164,
 '6/14': 165,
 '6/15': 166,
 '6/16': 167,
 '6/17': 168,
 '6/18': 169,
 '6/19': 170,
 '6/2': 153,
 '6/20': 171,
 '6/21': 172,
 '6/22': 173,
 '6/23': 174,
 '6/24': 175,
 '6/25': 176,
 '6/26': 177,
 '6/27': 178,
 '6/28': 179,
 '6/29': 180,
 '6/3': 154,
 '6/30': 181,
 '6/4': 155,
 '6/5': 156,
 '6/6': 157,
 '6/7': 158,
 '6/8': 159,
 '6/9': 160,
 '7/1': 182,
 '7/10': 191,
 '7/11': 192,
 '7/12': 193,
 '7/13': 194,
 '7/14': 195,
 '7/15': 196,
 '7/16': 197,
 '7/17': 198,
 '7/18': 199,
 '7/19': 200,
 '7/2': 183,
 '7/20': 201,
 '7/21': 202,
 '7/22': 203,
 '7/23': 204,
 '7/24': 205,
 '7/25': 206,
 '7/26': 207,
 '7/27': 208,
 '7/28': 209,
 '7/29': 210,
 '7/3': 184,
 '7/30': 211,
 '7/31': 212,
 '7/4': 185,
 '7/5': 186,
 '7/6': 187,
 '7/7': 188,
 '7/8': 189,
 '7/9': 190,
 '8/1': 213,
 '8/10': 222,
 '8/11': 223,
 '8/12': 224,
 '8/13': 225,
 '8/14': 226,
 '8/15': 227,
 '8/16': 228,
 '8/17': 229,
 '8/18': 230,
 '8/19': 231,
 '8/2': 214,
 '8/20': 232,
 '8/21': 233,
 '8/22': 234,
 '8/23': 235,
 '8/24': 236,
 '8/25': 237,
 '8/26': 238,
 '8/27': 239,
 '8/28': 240,
 '8/29': 241,
 '8/3': 215,
 '8/30': 242,
 '8/31': 243,
 '8/4': 216,
 '8/5': 217,
 '8/6': 218,
 '8/7': 219,
 '8/8': 220,
 '8/9': 221,
 '9/1': 244,
 '9/10': 253,
 '9/11': 254,
 '9/12': 255,
 '9/13': 256,
 '9/14': 257,
 '9/15': 258,
 '9/16': 259,
 '9/17': 260,
 '9/18': 261,
 '9/19': 262,
 '9/2': 245,
 '9/20': 263,
 '9/21': 264,
 '9/22': 265,
 '9/23': 266,
 '9/24': 267,
 '9/25': 268,
 '9/26': 269,
 '9/27': 270,
 '9/28': 271,
 '9/29': 272,
 '9/3': 246,
 '9/30': 273,
 '9/4': 247,
 '9/5': 248,
 '9/6': 249,
 '9/7': 250,
 '9/8': 251,
 '9/9': 252}

