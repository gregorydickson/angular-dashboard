'use strict';
var data = '{ "kwfactor": 4, "days": [ {"date": "2013-07-09", "values": [ 263.52, 259.2, 254.88, 263.52, 259.2, 263.52, 267.84, 259.2, 250.56, 259.2, 254.88, 254.88, 250.56, 259.2, 250.56, 254.88, 276.48, 285.12, 280.8, 285.12, 302.4, 302.4, 293.76, 311.04, 354.24, 354.24, 341.28, 345.6, 354.24, 354.24, 354.24, 362.88, 362.88, 371.52, 367.2, 375.84, 375.84, 380.16, 384.48, 393.12, 384.48, 397.44, 397.44, 410.4, 410.4, 406.08, 406.08, 406.08, 401.76, 406.08, 406.08, 410.4, 410.4, 410.4, 410.4, 380.16, 0, 8.64, 138.24, 159.84, 181.44, 172.8, 151.2, 237.6, 393.12, 410.4, 406.08, 410.4, 401.76, 397.44, 388.8, 384.48, 367.2, 375.84, 367.2, 358.56, 367.2, 367.2, 371.52, 358.56, 349.92, 362.88, 375.84, 367.2, 371.52, 371.52, 371.52, 358.56, 345.6, 319.68, 298.08, 280.8, 272.16, 276.48, 259.2, 259.2 ], "avgtemp": 45.3 },{"date": "2013-07-10", "values": [ 263.52, 254.88, 254.88, 250.56, 250.56, 254.88, 254.88, 246.24, 246.24, 259.2, 246.24, 241.92, 246.24, 233.28, 254.88, 250.56, 272.16, 272.16, 280.8, 272.16, 280.8, 267.84, 263.52, 289.44, 341.28, 336.96, 315.36, 315.36, 324, 332.64, 354.24, 354.24, 345.6, 354.24, 358.56, 358.56, 367.2, 362.88, 362.88, 371.52, 380.16, 380.16, 393.12, 401.76, 397.44, 397.44, 393.12, 401.76, 401.76, 401.76, 401.76, 393.12, 401.76, 401.76, 410.4, 397.44, 410.4, 414.72, 410.4, 406.08, 393.12, 302.4, 298.08, 393.12, 397.44, 393.12, 380.16, 375.84, 358.56, 345.6, 341.28, 336.96, 332.64, 336.96, 336.96, 345.6, 354.24, 349.92, 354.24, 349.92, 349.92, 349.92, 358.56, 354.24, 358.56, 354.24, 349.92, 349.92, 332.64, 328.32, 306.72, 293.76, 285.12, 276.48, 267.84, 267.84 ], "avgtemp": 45.3 },{"date": "2013-07-11", "values": [ 267.84, 259.2, 254.88, 250.56, 254.88, 250.56, 254.88, 254.88, 259.2, 250.56, 254.88, 259.2, 254.88, 254.88, 254.88, 259.2, 293.76, 293.76, 289.44, 280.8, 289.44, 289.44, 293.76, 306.72, 358.56, 354.24, 336.96, 341.28, 341.28, 349.92, 354.24, 354.24, 354.24, 354.24, 354.24, 358.56, 367.2, 375.84, 375.84, 375.84, 384.48, 384.48, 393.12, 401.76, 401.76, 397.44, 401.76, 393.12, 393.12, 393.12, 388.8, 397.44, 401.76, 393.12, 393.12, 397.44, 393.12, 397.44, 393.12, 384.48, 380.16, 380.16, 375.84, 371.52, 371.52, 362.88, 362.88, 362.88, 358.56, 345.6, 349.92, 345.6, 345.6, 358.56, 349.92, 349.92, 371.52, 375.84, 367.2, 362.88, 341.28, 358.56, 354.24, 362.88, 354.24, 354.24, 354.24, 349.92, 328.32, 302.4, 285.12, 267.84, 263.52, 259.2, 250.56, 250.56 ], "avgtemp": 45.3 },{"date": "2013-07-12", "values": [ 250.56, 246.24, 241.92, 246.24, 246.24, 250.56, 241.92, 246.24, 246.24, 246.24, 246.24, 216, 207.36, 246.24, 298.08, 311.04, 345.6, 345.6, 336.96, 336.96, 328.32, 324, 332.64, 341.28, 354.24, 345.6, 341.28, 336.96, 349.92, 358.56, 362.88, 371.52, 367.2, 371.52, 380.16, 375.84, 384.48, 384.48, 388.8, 393.12, 388.8, 393.12, 393.12, 393.12, 393.12, 384.48, 388.8, 380.16, 384.48, 380.16, 375.84, 367.2, 349.92, 349.92, 315.36, 319.68, 324, 328.32, 324, 319.68, 324, 332.64, 332.64, 328.32, 332.64, 336.96, 315.36, 285.12, 280.8, 285.12, 289.44, 285.12, 293.76, 280.8, 280.8, 293.76, 293.76, 285.12, 293.76, 285.12, 285.12, 302.4, 302.4, 315.36, 315.36, 324, 341.28, 341.28, 306.72, 285.12, 267.84, 267.84, 259.2, 259.2, 267.84, 250.56 ], "avgtemp": 45.3 },{"date": "2013-07-13", "values": [ 250.56, 237.6, 237.6, 241.92, 233.28, 237.6, 237.6, 241.92, 246.24, 246.24, 250.56, 233.28, 233.28, 237.6, 233.28, 237.6, 259.2, 267.84, 267.84, 272.16, 276.48, 293.76, 298.08, 311.04, 332.64, 354.24, 354.24, 345.6, 354.24, 349.92, 349.92, 341.28, 319.68, 324, 315.36, 328.32, 324, 315.36, 324, 319.68, 324, 332.64, 332.64, 332.64, 332.64, 328.32, 328.32, 332.64, 336.96, 332.64, 328.32, 336.96, 336.96, 332.64, 336.96, 345.6, 362.88, 371.52, 358.56, 362.88, 362.88, 358.56, 354.24, 354.24, 362.88, 367.2, 375.84, 371.52, 345.6, 324, 315.36, 306.72, 306.72, 302.4, 311.04, 302.4, 315.36, 306.72, 311.04, 298.08, 285.12, 280.8, 298.08, 289.44, 293.76, 289.44, 289.44, 285.12, 263.52, 254.88, 250.56, 237.6, 246.24, 228.96, 237.6, 246.24 ], "avgtemp": 45.3 },{"date": "2013-07-14", "values": [ 241.92, 233.28, 237.6, 241.92, 246.24, 233.28, 237.6, 228.96, 228.96, 233.28, 233.28, 233.28, 228.96, 237.6, 233.28, 224.64, 228.96, 228.96, 228.96, 228.96, 233.28, 246.24, 263.52, 267.84, 285.12, 293.76, 302.4, 298.08, 302.4, 315.36, 302.4, 289.44, 289.44, 272.16, 267.84, 263.52, 263.52, 254.88, 263.52, 259.2, 259.2, 263.52, 254.88, 254.88, 263.52, 259.2, 254.88, 259.2, 259.2, 254.88, 254.88, 254.88, 250.56, 254.88, 254.88, 250.56, 254.88, 246.24, 254.88, 237.6, 233.28, 220.32, 233.28, 241.92, 246.24, 246.24, 254.88, 250.56, 250.56, 246.24, 259.2, 246.24, 250.56, 254.88, 254.88, 246.24, 267.84, 276.48, 254.88, 241.92, 233.28, 233.28, 241.92, 241.92, 246.24, 233.28, 237.6, 246.24, 241.92, 224.64, 220.32, 211.68, 198.72, 203.04, 190.08, 190.08 ], "avgtemp": 45.3 },{"date": "2013-07-15", "values": [ 190.08, 181.44, 181.44, 181.44, 181.44, 181.44, 181.44, 181.44, 177.12, 181.44, 181.44, 185.76, 177.12, 185.76, 177.12, 185.76, 207.36, 207.36, 216, 216, 220.32, 224.64, 237.6, 241.92, 285.12, 276.48, 328.32, 332.64, 332.64, 332.64, 341.28, 362.88, 393.12, 380.16, 380.16, 354.24, 319.68, 315.36, 315.36, 315.36, 319.68, 311.04, 328.32, 324, 324, 324, 324, 328.32, 328.32, 319.68, 324, 319.68, 324, 328.32, 332.64, 336.96, 324, 332.64, 328.32, 332.64, 332.64, 324, 328.32, 328.32, 336.96, 332.64, 336.96, 328.32, 324, 319.68, 315.36, 311.04, 311.04, 302.4, 311.04, 298.08, 306.72, 311.04, 302.4, 298.08, 289.44, 298.08, 289.44, 285.12, 285.12, 272.16, 280.8, 259.2, 237.6, 233.28, 228.96, 228.96, 220.32, 224.64, 207.36, 207.36 ], "avgtemp": 45.3 },{"date": "2013-07-16", "values": [ 207.36, 194.4, 203.04, 198.72, 198.72, 194.4, 198.72, 194.4, 198.72, 198.72, 190.08, 198.72, 198.72, 198.72, 198.72, 198.72, 224.64, 224.64, 233.28, 228.96, 250.56, 246.24, 259.2, 267.84, 302.4, 311.04, 311.04, 315.36, 328.32, 354.24, 362.88, 362.88, 345.6, 319.68, 315.36, 324, 315.36, 319.68, 328.32, 328.32, 358.56, 375.84, 388.8, 384.48, 371.52, 349.92, 345.6, 336.96, 332.64, 324, 328.32, 332.64, 324, 324, 349.92, 362.88, 367.2, 349.92, 345.6, 349.92, 345.6, 358.56, 354.24, 341.28, 345.6, 345.6, 345.6, 341.28, 328.32, 324, 328.32, 319.68, 315.36, 311.04, 315.36, 315.36, 315.36, 315.36, 306.72, 289.44, 302.4, 319.68, 306.72, 298.08, 285.12, 293.76, 285.12, 285.12, 267.84, 254.88, 246.24, 254.88, 233.28, 246.24, 250.56, 250.56 ], "avgtemp": 45.3 },{"date": "2013-07-17", "values": [ 250.56, 250.56, 241.92, 246.24, 237.6, 241.92, 237.6, 237.6, 233.28, 237.6, 237.6, 237.6, 233.28, 237.6, 233.28, 241.92, 254.88, 263.52, 259.2, 267.84, 263.52, 272.16, 276.48, 280.8, 311.04, 306.72, 306.72, 306.72, 306.72, 319.68, 328.32, 336.96, 336.96, 341.28, 345.6, 349.92, 358.56, 367.2, 371.52, 384.48, 384.48, 388.8, 384.48, 393.12, 397.44, 397.44, 406.08, 397.44, 410.4, 406.08, 401.76, 401.76, 401.76, 393.12, 401.76, 397.44, 380.16, 367.2, 371.52, 367.2, 367.2, 367.2, 367.2, 367.2, 362.88, 367.2, 358.56, 354.24, 349.92, 345.6, 332.64, 324, 315.36, 315.36, 311.04, 311.04, 311.04, 306.72, 311.04, 293.76, 319.68, 328.32, 319.68, 306.72, 311.04, 311.04, 306.72, 289.44, 276.48, 259.2, 254.88, 250.56, 241.92, 241.92, 250.56, 246.24 ], "avgtemp": 45.3 },{"date": "2013-07-18", "values": [ 250.56, 246.24, 246.24, 250.56, 241.92, 241.92, 241.92, 246.24, 241.92, 237.6, 241.92, 241.92, 237.6, 237.6, 241.92, 241.92, 272.16, 272.16, 276.48, 272.16, 280.8, 280.8, 263.52, 289.44, 332.64, 328.32, 319.68, 311.04, 324, 332.64, 345.6, 354.24, 354.24, 354.24, 354.24, 362.88, 367.2, 358.56, 362.88, 367.2, 367.2, 371.52, 375.84, 380.16, 380.16, 384.48, 380.16, 371.52, 380.16, 388.8, 380.16, 375.84, 375.84, 384.48, 384.48, 388.8, 367.2, 371.52, 267.84, 224.64, 228.96, 228.96, 228.96, 224.64, 224.64, 224.64, 224.64, 220.32, 216, 211.68, 207.36, 198.72, 237.6, 336.96, 354.24, 332.64, 324, 319.68, 315.36, 306.72, 298.08, 298.08, 319.68, 306.72, 298.08, 302.4, 302.4, 293.76, 263.52, 259.2, 259.2, 246.24, 241.92, 246.24, 237.6, 241.92 ], "avgtemp": 45.3 },{"date": "2013-07-19", "values": [ 241.92, 233.28, 228.96, 233.28, 237.6, 246.24, 233.28, 233.28, 233.28, 224.64, 224.64, 224.64, 224.64, 224.64, 220.32, 224.64, 254.88, 259.2, 259.2, 263.52, 280.8, 280.8, 289.44, 306.72, 345.6, 358.56, 371.52, 367.2, 362.88, 358.56, 362.88, 358.56, 332.64, 345.6, 328.32, 332.64, 324, 332.64, 328.32, 336.96, 332.64, 336.96, 336.96, 336.96, 336.96, 332.64, 336.96, 336.96, 349.92, 358.56, 349.92, 341.28, 315.36, 306.72, 311.04, 306.72, 306.72, 306.72, 306.72, 306.72, 311.04, 311.04, 311.04, 306.72, 315.36, 306.72, 311.04, 302.4, 293.76, 298.08, 298.08, 302.4, 289.44, 293.76, 289.44, 289.44, 289.44, 289.44, 280.8, 289.44, 276.48, 272.16, 285.12, 285.12, 289.44, 280.8, 276.48, 280.8, 263.52, 272.16, 254.88, 250.56, 241.92, 237.6, 237.6, 237.6 ], "avgtemp": 45.3 },{"date": "2013-07-20", "values": [ 228.96, 228.96, 228.96, 233.28, 228.96, 254.88, 246.24, 237.6, 237.6, 233.28, 250.56, 246.24, 237.6, 228.96, 241.92, 246.24, 250.56, 259.2, 254.88, 263.52, 276.48, 289.44, 285.12, 302.4, 315.36, 349.92, 341.28, 332.64, 336.96, 306.72, 298.08, 298.08, 293.76, 285.12, 280.8, 285.12, 285.12, 285.12, 280.8, 289.44, 306.72, 298.08, 298.08, 293.76, 293.76, 302.4, 298.08, 306.72, 306.72, 306.72, 298.08, 302.4, 298.08, 311.04, 302.4, 311.04, 315.36, 311.04, 315.36, 319.68, 324, 311.04, 306.72, 315.36, 315.36, 306.72, 311.04, 302.4, 311.04, 298.08, 302.4, 302.4, 311.04, 311.04, 306.72, 306.72, 298.08, 298.08, 306.72, 293.76, 293.76, 289.44, 306.72, 315.36, 302.4, 302.4, 298.08, 298.08, 276.48, 263.52, 263.52, 254.88, 233.28, 250.56, 241.92, 224.64 ], "avgtemp": 45.3 },{"date": "2013-07-21", "values": [ 241.92, 237.6, 246.24, 241.92, 237.6, 233.28, 228.96, 241.92, 241.92, 233.28, 228.96, 233.28, 233.28, 233.28, 233.28, 237.6, 228.96, 233.28, 237.6, 237.6, 250.56, 263.52, 272.16, 267.84, 328.32, 336.96, 354.24, 341.28, 319.68, 293.76, 289.44, 285.12, 285.12, 285.12, 276.48, 285.12, 276.48, 285.12, 285.12, 289.44, 306.72, 315.36, 311.04, 302.4, 302.4, 306.72, 311.04, 302.4, 311.04, 311.04, 319.68, 324, 324, 336.96, 324, 341.28, 358.56, 345.6, 328.32, 332.64, 319.68, 306.72, 306.72, 311.04, 319.68, 315.36, 315.36, 315.36, 298.08, 289.44, 285.12, 293.76, 280.8, 285.12, 276.48, 285.12, 276.48, 276.48, 285.12, 285.12, 276.48, 276.48, 280.8, 280.8, 272.16, 280.8, 276.48, 272.16, 259.2, 259.2, 254.88, 250.56, 250.56, 267.84, 241.92, 237.6 ], "avgtemp": 45.3 },{"date": "2013-07-22", "values": [ 237.6, 237.6, 241.92, 237.6, 259.2, 254.88, 254.88, 263.52, 254.88, 267.84, 246.24, 241.92, 241.92, 254.88, 237.6, 241.92, 272.16, 280.8, 285.12, 289.44, 298.08, 306.72, 315.36, 332.64, 401.76, 397.44, 393.12, 380.16, 354.24, 349.92, 371.52, 380.16, 367.2, 367.2, 371.52, 367.2, 375.84, 380.16, 375.84, 375.84, 380.16, 380.16, 384.48, 397.44, 393.12, 397.44, 393.12, 401.76, 397.44, 393.12, 397.44, 397.44, 397.44, 401.76, 406.08, 419.04, 419.04, 419.04, 406.08, 410.4, 419.04, 414.72, 410.4, 419.04, 410.4, 414.72, 406.08, 406.08, 401.76, 393.12, 388.8, 388.8, 380.16, 384.48, 384.48, 380.16, 362.88, 358.56, 358.56, 345.6, 349.92, 358.56, 362.88, 349.92, 341.28, 341.28, 341.28, 324, 302.4, 285.12, 280.8, 276.48, 263.52, 263.52, 263.52, 259.2 ], "avgtemp": 45.3 },{"date": "2013-07-23", "values": [ 267.84, 259.2, 259.2, 254.88, 254.88, 254.88, 250.56, 254.88, 263.52, 263.52, 267.84, 276.48, 267.84, 254.88, 254.88, 259.2, 293.76, 293.76, 298.08, 298.08, 302.4, 306.72, 311.04, 319.68, 358.56, 375.84, 371.52, 362.88, 380.16, 401.76, 406.08, 393.12, 375.84, 375.84, 371.52, 367.2, 362.88, 375.84, 371.52, 375.84, 380.16, 384.48, 388.8, 384.48, 397.44, 410.4, 423.36, 414.72, 414.72, 414.72, 419.04, 406.08, 414.72, 419.04, 423.36, 423.36, 423.36, 414.72, 419.04, 414.72, 414.72, 419.04, 419.04, 414.72, 414.72, 410.4, 419.04, 406.08, 401.76, 397.44, 393.12, 388.8, 384.48, 388.8, 393.12, 380.16, 367.2, 362.88, 362.88, 345.6, 332.64, 332.64, 345.6, 341.28, 324, 332.64, 332.64, 324, 302.4, 285.12, 293.76, 280.8, 267.84, 272.16, 267.84, 272.16 ], "avgtemp": 45.3 },{"date": "2013-07-24", "values": [ 267.84, 267.84, 267.84, 263.52, 263.52, 263.52, 263.52, 259.2, 246.24, 241.92, 233.28, 233.28, 237.6, 246.24, 250.56, 246.24, 276.48, 276.48, 272.16, 280.8, 285.12, 289.44, 289.44, 293.76, 328.32, 328.32, 328.32, 332.64, 341.28, 345.6, 345.6, 358.56, 349.92, 263.52, 375.84, 380.16, 384.48, 380.16, 345.6, 349.92, 341.28, 341.28, 345.6, 345.6, 345.6, 349.92, 354.24, 358.56, 358.56, 354.24, 358.56, 362.88, 362.88, 362.88, 380.16, 401.76, 384.48, 384.48, 384.48, 380.16, 375.84, 375.84, 380.16, 384.48, 380.16, 375.84, 380.16, 371.52, 371.52, 367.2, 362.88, 362.88, 358.56, 354.24, 354.24, 349.92, 345.6, 341.28, 341.28, 324, 336.96, 345.6, 341.28, 336.96, 324, 328.32, 319.68, 306.72, 285.12, 276.48, 267.84, 263.52, 254.88, 254.88, 246.24, 246.24 ], "avgtemp": 45.3 },{"date": "2013-07-25", "values": [ 246.24, 241.92, 241.92, 254.88, 250.56, 254.88, 250.56, 254.88, 250.56, 246.24, 254.88, 250.56, 254.88, 254.88, 254.88, 259.2, 276.48, 285.12, 289.44, 280.8, 298.08, 293.76, 298.08, 302.4, 345.6, 345.6, 349.92, 341.28, 336.96, 345.6, 341.28, 345.6, 341.28, 349.92, 341.28, 354.24, 358.56, 362.88, 367.2, 375.84, 375.84, 375.84, 388.8, 393.12, 388.8, 384.48, 362.88, 362.88, 345.6, 341.28, 332.64, 336.96, 345.6, 345.6, 358.56, 380.16, 362.88, 362.88, 358.56, 358.56, 358.56, 358.56, 354.24, 358.56, 349.92, 349.92, 349.92, 349.92, 341.28, 332.64, 328.32, 332.64, 328.32, 324, 324, 324, 315.36, 311.04, 324, 311.04, 315.36, 324, 328.32, 315.36, 298.08, 306.72, 298.08, 293.76, 263.52, 263.52, 254.88, 254.88, 246.24, 246.24, 233.28, 237.6 ], "avgtemp": 45.3 },{"date": "2013-07-26", "values": [ 237.6, 233.28, 241.92, 233.28, 237.6, 237.6, 237.6, 237.6, 233.28, 233.28, 237.6, 237.6, 233.28, 233.28, 233.28, 241.92, 267.84, 272.16, 276.48, 276.48, 289.44, 293.76, 293.76, 302.4, 345.6, 349.92, 349.92, 345.6, 332.64, 328.32, 341.28, 345.6, 341.28, 349.92, 349.92, 358.56, 349.92, 354.24, 354.24, 349.92, 341.28, 336.96, 336.96, 328.32, 332.64, 332.64, 328.32, 328.32, 319.68, 328.32, 315.36, 311.04, 285.12, 276.48, 280.8, 285.12, 280.8, 276.48, 285.12, 276.48, 276.48, 276.48, 280.8, 280.8, 280.8, 276.48, 285.12, 272.16, 259.2, 263.52, 263.52, 259.2, 250.56, 254.88, 254.88, 259.2, 254.88, 250.56, 263.52, 254.88, 259.2, 250.56, 267.84, 263.52, 259.2, 250.56, 259.2, 250.56, 254.88, 246.24, 237.6, 233.28, 241.92, 250.56, 224.64, 220.32 ], "avgtemp": 45.3 },{"date": "2013-07-27", "values": [ 216, 216, 211.68, 211.68, 207.36, 207.36, 211.68, 207.36, 207.36, 207.36, 207.36, 207.36, 207.36, 207.36, 203.04, 207.36, 228.96, 233.28, 237.6, 250.56, 259.2, 276.48, 272.16, 267.84, 293.76, 306.72, 302.4, 298.08, 315.36, 324, 324, 306.72, 285.12, 293.76, 289.44, 285.12, 280.8, 289.44, 289.44, 289.44, 285.12, 285.12, 289.44, 293.76, 285.12, 293.76, 289.44, 293.76, 289.44, 298.08, 298.08, 298.08, 298.08, 293.76, 306.72, 311.04, 311.04, 311.04, 319.68, 311.04, 315.36, 302.4, 315.36, 311.04, 315.36, 324, 319.68, 306.72, 315.36, 315.36, 311.04, 306.72, 302.4, 311.04, 311.04, 302.4, 306.72, 302.4, 302.4, 293.76, 289.44, 293.76, 306.72, 298.08, 298.08, 293.76, 293.76, 293.76, 259.2, 254.88, 246.24, 237.6, 233.28, 224.64, 228.96, 228.96 ], "avgtemp": 45.3 },{"date": "2013-07-28", "values": [ 228.96, 224.64, 216, 216, 211.68, 211.68, 203.04, 207.36, 207.36, 211.68, 207.36, 203.04, 203.04, 203.04, 207.36, 203.04, 207.36, 211.68, 207.36, 207.36, 224.64, 237.6, 233.28, 241.92, 293.76, 298.08, 302.4, 293.76, 293.76, 289.44, 280.8, 280.8, 285.12, 280.8, 272.16, 276.48, 259.2, 246.24, 250.56, 246.24, 250.56, 259.2, 254.88, 267.84, 267.84, 267.84, 272.16, 276.48, 276.48, 280.8, 280.8, 289.44, 293.76, 293.76, 298.08, 311.04, 306.72, 311.04, 311.04, 306.72, 311.04, 306.72, 302.4, 306.72, 311.04, 311.04, 311.04, 298.08, 280.8, 276.48, 280.8, 285.12, 276.48, 280.8, 280.8, 276.48, 276.48, 267.84, 272.16, 267.84, 254.88, 267.84, 263.52, 267.84, 263.52, 267.84, 259.2, 254.88, 246.24, 250.56, 246.24, 237.6, 228.96, 233.28, 224.64, 216 ], "avgtemp": 45.3 },{"date": "2013-07-29", "values": [ 233.28, 216, 216, 211.68, 216, 211.68, 216, 211.68, 211.68, 216, 211.68, 220.32, 216, 211.68, 211.68, 216, 250.56, 259.2, 263.52, 272.16, 276.48, 293.76, 306.72, 315.36, 362.88, 384.48, 371.52, 362.88, 332.64, 345.6, 358.56, 311.04, 198.72, 207.36, 211.68, 211.68, 216, 211.68, 250.56, 349.92, 375.84, 393.12, 397.44, 401.76, 401.76, 406.08, 401.76, 401.76, 397.44, 401.76, 393.12, 393.12, 388.8, 401.76, 397.44, 401.76, 397.44, 384.48, 367.2, 367.2, 375.84, 384.48, 384.48, 380.16, 384.48, 375.84, 380.16, 380.16, 358.56, 362.88, 354.24, 354.24, 345.6, 345.6, 341.28, 341.28, 324, 328.32, 324, 311.04, 332.64, 341.28, 336.96, 324, 306.72, 315.36, 306.72, 306.72, 272.16, 267.84, 263.52, 263.52, 250.56, 246.24, 237.6, 237.6 ], "avgtemp": 45.3 },{"date": "2013-07-30", "values": [ 246.24, 246.24, 241.92, 228.96, 211.68, 211.68, 207.36, 207.36, 216, 216, 250.56, 263.52, 233.28, 216, 224.64, 220.32, 254.88, 233.28, 298.08, 375.84, 419.04, 423.36, 423.36, 419.04, 432, 436.32, 432, 427.68, 423.36, 432, 436.32, 444.96, 457.92, 449.28, 453.6, 462.24, 466.56, 522.72, 475.2, 587.52, 596.16, 587.52, 604.8, 665.28, 738.72, 695.52, 635.04, 643.68, 656.64, 656.64, 660.96, 665.28, 652.32, 669.6, 544.32, 479.52, 388.8, 380.16, 380.16, 371.52, 375.84, 371.52, 380.16, 362.88, 371.52, 380.16, 371.52, 362.88, 354.24, 358.56, 349.92, 341.28, 345.6, 345.6, 345.6, 336.96, 336.96, 328.32, 324, 311.04, 328.32, 336.96, 336.96, 332.64, 319.68, 319.68, 319.68, 311.04, 289.44, 276.48, 267.84, 267.84, 263.52, 254.88, 250.56, 254.88 ], "avgtemp": 45.3 },{"date": "2013-07-31", "values": [ 246.24, 250.56, 246.24, 246.24, 250.56, 246.24, 250.56, 250.56, 241.92, 246.24, 241.92, 246.24, 237.6, 241.92, 237.6, 246.24, 259.2, 259.2, 289.44, 289.44, 306.72, 306.72, 311.04, 311.04, 362.88, 375.84, 362.88, 354.24, 362.88, 354.24, 358.56, 349.92, 345.6, 358.56, 358.56, 367.2, 371.52, 362.88, 371.52, 367.2, 367.2, 371.52, 371.52, 362.88, 358.56, 349.92, 354.24, 362.88, 380.16, 384.48, 388.8, 388.8, 393.12, 388.8, 393.12, 393.12, 367.2, 371.52, 367.2, 367.2, 362.88, 367.2, 371.52, 362.88, 367.2, 362.88, 362.88, 354.24, 354.24, 341.28, 341.28, 341.28, 341.28, 336.96, 336.96, 332.64, 328.32, 315.36, 315.36, 306.72, 324, 341.28, 328.32, 328.32, 311.04, 306.72, 311.04, 306.72, 276.48, 267.84, 263.52, 259.2, 241.92, 250.56, 241.92, 241.92 ], "avgtemp": 45.3 },{"date": "2013-08-01", "values": [ 241.92, 246.24, 246.24, 250.56, 254.88, 254.88, 254.88, 259.2, 250.56, 254.88, 250.56, 254.88, 250.56, 250.56, 246.24, 254.88, 276.48, 285.12, 280.8, 272.16, 289.44, 289.44, 293.76, 293.76, 332.64, 341.28, 332.64, 332.64, 328.32, 336.96, 354.24, 362.88, 349.92, 354.24, 336.96, 349.92, 345.6, 345.6, 349.92, 358.56, 367.2, 362.88, 367.2, 367.2, 367.2, 371.52, 362.88, 367.2, 362.88, 367.2, 362.88, 371.52, 371.52, 367.2, 380.16, 375.84, 367.2, 362.88, 354.24, 371.52, 367.2, 358.56, 362.88, 358.56, 375.84, 362.88, 362.88, 358.56, 354.24, 345.6, 345.6, 349.92, 336.96, 336.96, 341.28, 345.6, 332.64, 324, 319.68, 311.04, 332.64, 336.96, 336.96, 328.32, 315.36, 315.36, 315.36, 306.72, 285.12, 276.48, 263.52, 267.84, 254.88, 259.2, 246.24, 246.24 ], "avgtemp": 45.3 },{"date": "2013-08-02", "values": [ 250.56, 237.6, 246.24, 237.6, 246.24, 241.92, 237.6, 241.92, 237.6, 233.28, 246.24, 254.88, 250.56, 250.56, 254.88, 254.88, 285.12, 298.08, 285.12, 289.44, 302.4, 306.72, 306.72, 315.36, 354.24, 367.2, 367.2, 362.88, 358.56, 358.56, 362.88, 362.88, 345.6, 341.28, 332.64, 328.32, 332.64, 319.68, 324, 332.64, 332.64, 324, 341.28, 341.28, 349.92, 349.92, 341.28, 349.92, 354.24, 349.92, 345.6, 354.24, 349.92, 354.24, 384.48, 393.12, 384.48, 388.8, 380.16, 388.8, 384.48, 380.16, 375.84, 375.84, 380.16, 380.16, 380.16, 367.2, 358.56, 358.56, 354.24, 345.6, 349.92, 345.6, 341.28, 341.28, 332.64, 332.64, 324, 315.36, 324, 336.96, 332.64, 328.32, 319.68, 319.68, 324, 306.72, 285.12, 280.8, 267.84, 263.52, 259.2, 250.56, 246.24, 246.24 ], "avgtemp": 45.3 },{"date": "2013-08-03", "values": [ 250.56, 241.92, 241.92, 246.24, 241.92, 246.24, 246.24, 246.24, 233.28, 254.88, 246.24, 250.56, 250.56, 254.88, 250.56, 254.88, 259.2, 267.84, 267.84, 263.52, 285.12, 293.76, 293.76, 293.76, 319.68, 324, 332.64, 324, 315.36, 302.4, 311.04, 302.4, 302.4, 302.4, 302.4, 293.76, 298.08, 298.08, 298.08, 298.08, 302.4, 298.08, 302.4, 293.76, 302.4, 311.04, 319.68, 319.68, 328.32, 332.64, 324, 332.64, 332.64, 332.64, 332.64, 341.28, 345.6, 341.28, 332.64, 332.64, 328.32, 328.32, 319.68, 306.72, 315.36, 311.04, 315.36, 315.36, 315.36, 311.04, 311.04, 315.36, 315.36, 311.04, 306.72, 306.72, 311.04, 311.04, 306.72, 311.04, 306.72, 302.4, 311.04, 302.4, 293.76, 298.08, 289.44, 293.76, 272.16, 263.52, 263.52, 254.88, 250.56, 250.56, 237.6, 241.92 ], "avgtemp": 45.3 },{"date": "2013-08-04", "values": [ 241.92, 241.92, 228.96, 233.28, 241.92, 237.6, 233.28, 233.28, 228.96, 233.28, 233.28, 241.92, 237.6, 233.28, 237.6, 228.96, 233.28, 233.28, 259.2, 254.88, 254.88, 272.16, 280.8, 285.12, 332.64, 345.6, 358.56, 345.6, 341.28, 319.68, 306.72, 293.76, 293.76, 289.44, 280.8, 280.8, 293.76, 293.76, 289.44, 298.08, 302.4, 311.04, 319.68, 315.36, 306.72, 302.4, 306.72, 315.36, 306.72, 311.04, 319.68, 332.64, 336.96, 328.32, 328.32, 328.32, 328.32, 328.32, 302.4, 306.72, 298.08, 302.4, 306.72, 315.36, 306.72, 319.68, 311.04, 302.4, 285.12, 276.48, 280.8, 285.12, 280.8, 280.8, 285.12, 302.4, 293.76, 285.12, 280.8, 276.48, 272.16, 289.44, 285.12, 280.8, 280.8, 276.48, 272.16, 272.16, 276.48, 276.48, 263.52, 254.88, 241.92, 241.92, 233.28, 237.6 ], "avgtemp": 45.3 },{"date": "2013-08-05", "values": [ 246.24, 241.92, 237.6, 237.6, 250.56, 237.6, 228.96, 233.28, 237.6, 250.56, 241.92, 228.96, 233.28, 237.6, 259.2, 259.2, 267.84, 289.44, 289.44, 285.12, 298.08, 302.4, 315.36, 311.04, 367.2, 375.84, 375.84, 362.88, 358.56, 362.88, 358.56, 349.92, 362.88, 358.56, 362.88, 362.88, 367.2, 380.16, 375.84, 380.16, 388.8, 384.48, 375.84, 371.52, 362.88, 362.88, 362.88, 362.88, 358.56, 358.56, 354.24, 367.2, 380.16, 371.52, 393.12, 401.76, 410.4, 406.08, 406.08, 397.44, 397.44, 393.12, 388.8, 397.44, 397.44, 388.8, 393.12, 388.8, 380.16, 375.84, 362.88, 367.2, 362.88, 358.56, 362.88, 358.56, 345.6, 345.6, 345.6, 336.96, 324, 341.28, 358.56, 349.92, 332.64, 341.28, 332.64, 319.68, 302.4, 289.44, 276.48, 276.48, 263.52, 263.52, 259.2, 254.88 ], "avgtemp": 45.3 },{"date": "2013-08-06", "values": [ 254.88, 254.88, 263.52, 263.52, 267.84, 267.84, 267.84, 267.84, 263.52, 267.84, 259.2, 259.2, 263.52, 254.88, 250.56, 263.52, 276.48, 293.76, 285.12, 285.12, 298.08, 298.08, 298.08, 280.8, 220.32, 211.68, 203.04, 190.08, 198.72, 198.72, 203.04, 207.36, 216, 203.04, 203.04, 216, 216, 207.36, 211.68, 211.68, 216, 211.68, 220.32, 216, 224.64, 224.64, 354.24, 371.52, 371.52, 354.24, 358.56, 354.24, 362.88, 358.56, 384.48, 401.76, 397.44, 393.12, 393.12, 388.8, 393.12, 388.8, 397.44, 384.48, 384.48, 397.44, 388.8, 380.16, 375.84, 371.52, 371.52, 367.2, 362.88, 371.52, 362.88, 362.88, 358.56, 354.24, 349.92, 336.96, 328.32, 336.96, 332.64, 341.28, 315.36, 324, 328.32, 315.36, 285.12, 276.48, 285.12, 267.84, 259.2, 259.2, 250.56, 250.56 ], "avgtemp": 45.3 },{"date": "2013-08-07", "values": [ 250.56, 250.56, 250.56, 254.88, 263.52, 263.52, 263.52, 263.52, 267.84, 263.52, 263.52, 259.2, 263.52, 259.2, 254.88, 267.84, 289.44, 293.76, 298.08, 285.12, 302.4, 306.72, 302.4, 311.04, 358.56, 367.2, 367.2, 367.2, 358.56, 367.2, 384.48, 384.48, 380.16, 384.48, 380.16, 393.12, 384.48, 388.8, 384.48, 393.12, 388.8, 384.48, 384.48, 401.76, 393.12, 397.44, 393.12, 393.12, 401.76, 393.12, 388.8, 397.44, 401.76, 393.12, 401.76, 406.08, 401.76, 406.08, 401.76, 406.08, 410.4, 410.4, 401.76, 401.76, 406.08, 401.76, 401.76, 393.12, 388.8, 384.48, 384.48, 380.16, 375.84, 375.84, 375.84, 375.84, 362.88, 358.56, 362.88, 345.6, 332.64, 341.28, 341.28, 341.28, 328.32, 332.64, 328.32, 324, 306.72, 298.08, 289.44, 285.12, 272.16, 272.16, 263.52, 263.52 ], "avgtemp": 45.3 }], "deciles": [ 99.36, 116.64, 138.24, 160.02, 190.08, 233.28, 267.48, 302.4, 345.6, 656.64] } ';
var tree = '{"facilities":[{"id":1957,"meters":[{"id":2144,"desc":"Meter #1"},{"id":2145,"desc":"Meter #2"}],"name":"Arena"}]}';

var bigObject = JSON.parse(data);
console.log ("loaded data ");
var days = bigObject.days;
//console.log("days is "  );

var allkwh = [];
var milisecondsToAdd = 0;
var dateInMilliseconds;
var date;
var totalMilliseconds;
var millisecondsToAdd;
var element = [];
var kwhHeatData = [];
var intervals = [];
var intervalDates = [];

for (var i = 0; i <= 95; i++) {
	intervals.push(i);
	$.each(days, function(index, day){
		
		element = [i, Date.parse(days[index].date), days[index].values[i]];
		//console.log("Element is " + element);
		kwhHeatData.push(element);
	
	});
};

$.each(days, function(index, day){
	intervalDates.push(day.date);
	$.each(day.values, function (index,the96){
		//console.log("interval " + index + " is " + the96);
		
		dateInMilliseconds = Date.parse(day.date);
		
		millisecondsToAdd = 900000 * (1+index);
		totalMilliseconds = dateInMilliseconds + millisecondsToAdd;
		
		//console.log("updated date is " + totalMilliseconds);
		element = [totalMilliseconds,
					the96]
		allkwh.push(element); 
		
	});
	
});


console.log("intervalDates is " + intervalDates);

