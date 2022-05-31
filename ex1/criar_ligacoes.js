//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/MAPA2022';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error...'));
db.once('open', function() {
    console.log("Conexão ao MongoDB realizada com sucesso...")
});

var ligacoesSchema = new mongoose.Schema({
    id: String,
    origem: String,
    destino: String,
    distancia: Number
});

var ligacoesModel = mongoose.model('ligacoes', ligacoesSchema)

var data = [
    {
      "id": "l1-c60-c95",
      "origem": "c60",
      "destino": "c95",
      "distância": 383.661
    },
    {
      "id": "l2-c22-c70",
      "origem": "c22",
      "destino": "c70",
      "distância": 541.246
    },
    {
      "id": "l3-c18-c56",
      "origem": "c18",
      "destino": "c56",
      "distância": 538.899
    },
    {
      "id": "l4-c4-c94",
      "origem": "c4",
      "destino": "c94",
      "distância": 536.467
    },
    {
      "id": "l5-c20-c64",
      "origem": "c20",
      "destino": "c64",
      "distância": 350.708
    },
    {
      "id": "l6-c8-c19",
      "origem": "c8",
      "destino": "c19",
      "distância": 33.434
    },
    {
      "id": "l7-c18-c96",
      "origem": "c18",
      "destino": "c96",
      "distância": 198.66
    },
    {
      "id": "l8-c39-c55",
      "origem": "c39",
      "destino": "c55",
      "distância": 208.106
    },
    {
      "id": "l9-c35-c70",
      "origem": "c35",
      "destino": "c70",
      "distância": 376.188
    },
    {
      "id": "l10-c65-c68",
      "origem": "c65",
      "destino": "c68",
      "distância": 324.992
    },
    {
      "id": "l11-c58-c98",
      "origem": "c58",
      "destino": "c98",
      "distância": 330.438
    },
    {
      "id": "l12-c10-c84",
      "origem": "c10",
      "destino": "c84",
      "distância": 251.547
    },
    {
      "id": "l13-c1-c8",
      "origem": "c1",
      "destino": "c8",
      "distância": 384.511
    },
    {
      "id": "l14-c73-c74",
      "origem": "c73",
      "destino": "c74",
      "distância": 274.358
    },
    {
      "id": "l15-c8-c89",
      "origem": "c8",
      "destino": "c89",
      "distância": 175.787
    },
    {
      "id": "l16-c63-c92",
      "origem": "c63",
      "destino": "c92",
      "distância": 136.652
    },
    {
      "id": "l17-c32-c80",
      "origem": "c32",
      "destino": "c80",
      "distância": 117.771
    },
    {
      "id": "l18-c9-c34",
      "origem": "c9",
      "destino": "c34",
      "distância": 215.688
    },
    {
      "id": "l19-c3-c19",
      "origem": "c3",
      "destino": "c19",
      "distância": 472.75
    },
    {
      "id": "l20-c2-c85",
      "origem": "c2",
      "destino": "c85",
      "distância": 573.585
    },
    {
      "id": "l21-c2-c28",
      "origem": "c2",
      "destino": "c28",
      "distância": 256.96
    },
    {
      "id": "l22-c79-c99",
      "origem": "c79",
      "destino": "c99",
      "distância": 567.748
    },
    {
      "id": "l23-c2-c12",
      "origem": "c2",
      "destino": "c12",
      "distância": 231.862
    },
    {
      "id": "l24-c38-c99",
      "origem": "c38",
      "destino": "c99",
      "distância": 10.984
    },
    {
      "id": "l25-c33-c70",
      "origem": "c33",
      "destino": "c70",
      "distância": 366.219
    },
    {
      "id": "l26-c18-c79",
      "origem": "c18",
      "destino": "c79",
      "distância": 411.949
    },
    {
      "id": "l27-c37-c68",
      "origem": "c37",
      "destino": "c68",
      "distância": 398.256
    },
    {
      "id": "l28-c39-c60",
      "origem": "c39",
      "destino": "c60",
      "distância": 241.425
    },
    {
      "id": "l29-c81-c88",
      "origem": "c81",
      "destino": "c88",
      "distância": 164.185
    },
    {
      "id": "l30-c39-c93",
      "origem": "c39",
      "destino": "c93",
      "distância": 532.639
    },
    {
      "id": "l31-c83-c88",
      "origem": "c83",
      "destino": "c88",
      "distância": 307.67
    },
    {
      "id": "l32-c12-c17",
      "origem": "c12",
      "destino": "c17",
      "distância": 481.882
    },
    {
      "id": "l33-c69-c99",
      "origem": "c69",
      "destino": "c99",
      "distância": 374.986
    },
    {
      "id": "l34-c20-c55",
      "origem": "c20",
      "destino": "c55",
      "distância": 479.235
    },
    {
      "id": "l35-c69-c82",
      "origem": "c69",
      "destino": "c82",
      "distância": 481.82
    },
    {
      "id": "l36-c16-c19",
      "origem": "c16",
      "destino": "c19",
      "distância": 343.824
    },
    {
      "id": "l37-c7-c83",
      "origem": "c7",
      "destino": "c83",
      "distância": 495.751
    },
    {
      "id": "l38-c21-c98",
      "origem": "c21",
      "destino": "c98",
      "distância": 465.195
    },
    {
      "id": "l39-c15-c70",
      "origem": "c15",
      "destino": "c70",
      "distância": 497.98
    },
    {
      "id": "l40-c7-c51",
      "origem": "c7",
      "destino": "c51",
      "distância": 273.986
    },
    {
      "id": "l41-c38-c40",
      "origem": "c38",
      "destino": "c40",
      "distância": 217.97
    },
    {
      "id": "l42-c35-c40",
      "origem": "c35",
      "destino": "c40",
      "distância": 58.061
    },
    {
      "id": "l43-c62-c87",
      "origem": "c62",
      "destino": "c87",
      "distância": 444.809
    },
    {
      "id": "l44-c17-c40",
      "origem": "c17",
      "destino": "c40",
      "distância": 535.415
    },
    {
      "id": "l45-c43-c99",
      "origem": "c43",
      "destino": "c99",
      "distância": 16.039
    },
    {
      "id": "l46-c93-c94",
      "origem": "c93",
      "destino": "c94",
      "distância": 255.321
    },
    {
      "id": "l47-c17-c56",
      "origem": "c17",
      "destino": "c56",
      "distância": 550.25
    },
    {
      "id": "l48-c36-c94",
      "origem": "c36",
      "destino": "c94",
      "distância": 382.6
    },
    {
      "id": "l49-c84-c95",
      "origem": "c84",
      "destino": "c95",
      "distância": 99.863
    },
    {
      "id": "l50-c59-c78",
      "origem": "c59",
      "destino": "c78",
      "distância": 542.767
    },
    {
      "id": "l51-c1-c6",
      "origem": "c1",
      "destino": "c6",
      "distância": 561.478
    },
    {
      "id": "l52-c10-c98",
      "origem": "c10",
      "destino": "c98",
      "distância": 394.877
    },
    {
      "id": "l53-c5-c79",
      "origem": "c5",
      "destino": "c79",
      "distância": 461.774
    },
    {
      "id": "l54-c57-c70",
      "origem": "c57",
      "destino": "c70",
      "distância": 6.678
    },
    {
      "id": "l55-c19-c80",
      "origem": "c19",
      "destino": "c80",
      "distância": 172.511
    },
    {
      "id": "l56-c72-c86",
      "origem": "c72",
      "destino": "c86",
      "distância": 24.372
    },
    {
      "id": "l57-c27-c34",
      "origem": "c27",
      "destino": "c34",
      "distância": 514.425
    },
    {
      "id": "l58-c7-c17",
      "origem": "c7",
      "destino": "c17",
      "distância": 66.971
    },
    {
      "id": "l59-c3-c20",
      "origem": "c3",
      "destino": "c20",
      "distância": 101.525
    },
    {
      "id": "l60-c22-c54",
      "origem": "c22",
      "destino": "c54",
      "distância": 534.906
    },
    {
      "id": "l61-c54-c100",
      "origem": "c54",
      "destino": "c100",
      "distância": 404.73
    },
    {
      "id": "l62-c80-c96",
      "origem": "c80",
      "destino": "c96",
      "distância": 261.637
    },
    {
      "id": "l63-c33-c39",
      "origem": "c33",
      "destino": "c39",
      "distância": 121.04
    },
    {
      "id": "l64-c8-c68",
      "origem": "c8",
      "destino": "c68",
      "distância": 94.417
    },
    {
      "id": "l65-c13-c38",
      "origem": "c13",
      "destino": "c38",
      "distância": 416.01
    },
    {
      "id": "l66-c5-c45",
      "origem": "c5",
      "destino": "c45",
      "distância": 222.955
    },
    {
      "id": "l67-c49-c75",
      "origem": "c49",
      "destino": "c75",
      "distância": 191.326
    },
    {
      "id": "l68-c66-c83",
      "origem": "c66",
      "destino": "c83",
      "distância": 172.61
    },
    {
      "id": "l69-c24-c93",
      "origem": "c24",
      "destino": "c93",
      "distância": 514.972
    },
    {
      "id": "l70-c34-c99",
      "origem": "c34",
      "destino": "c99",
      "distância": 435.514
    },
    {
      "id": "l71-c34-c80",
      "origem": "c34",
      "destino": "c80",
      "distância": 544.981
    },
    {
      "id": "l72-c48-c61",
      "origem": "c48",
      "destino": "c61",
      "distância": 286.76
    },
    {
      "id": "l73-c64-c82",
      "origem": "c64",
      "destino": "c82",
      "distância": 200.247
    },
    {
      "id": "l74-c43-c59",
      "origem": "c43",
      "destino": "c59",
      "distância": 447.17
    },
    {
      "id": "l75-c8-c36",
      "origem": "c8",
      "destino": "c36",
      "distância": 81.057
    },
    {
      "id": "l76-c12-c77",
      "origem": "c12",
      "destino": "c77",
      "distância": 107.467
    },
    {
      "id": "l77-c15-c28",
      "origem": "c15",
      "destino": "c28",
      "distância": 293.451
    },
    {
      "id": "l78-c31-c87",
      "origem": "c31",
      "destino": "c87",
      "distância": 216.124
    },
    {
      "id": "l79-c8-c50",
      "origem": "c8",
      "destino": "c50",
      "distância": 451.595
    },
    {
      "id": "l80-c11-c97",
      "origem": "c11",
      "destino": "c97",
      "distância": 37.392
    },
    {
      "id": "l81-c22-c95",
      "origem": "c22",
      "destino": "c95",
      "distância": 584.959
    },
    {
      "id": "l82-c62-c74",
      "origem": "c62",
      "destino": "c74",
      "distância": 208.363
    },
    {
      "id": "l83-c2-c79",
      "origem": "c2",
      "destino": "c79",
      "distância": 587.613
    },
    {
      "id": "l84-c16-c23",
      "origem": "c16",
      "destino": "c23",
      "distância": 225.956
    },
    {
      "id": "l85-c27-c45",
      "origem": "c27",
      "destino": "c45",
      "distância": 272.141
    },
    {
      "id": "l86-c1-c4",
      "origem": "c1",
      "destino": "c4",
      "distância": 64.39
    },
    {
      "id": "l87-c48-c68",
      "origem": "c48",
      "destino": "c68",
      "distância": 383.278
    },
    {
      "id": "l88-c45-c55",
      "origem": "c45",
      "destino": "c55",
      "distância": 544.716
    },
    {
      "id": "l89-c48-c72",
      "origem": "c48",
      "destino": "c72",
      "distância": 88.155
    },
    {
      "id": "l90-c12-c45",
      "origem": "c12",
      "destino": "c45",
      "distância": 162.881
    },
    {
      "id": "l91-c31-c90",
      "origem": "c31",
      "destino": "c90",
      "distância": 529.186
    },
    {
      "id": "l92-c7-c18",
      "origem": "c7",
      "destino": "c18",
      "distância": 179.517
    },
    {
      "id": "l93-c26-c33",
      "origem": "c26",
      "destino": "c33",
      "distância": 145.245
    },
    {
      "id": "l94-c18-c95",
      "origem": "c18",
      "destino": "c95",
      "distância": 36.882
    },
    {
      "id": "l95-c3-c93",
      "origem": "c3",
      "destino": "c93",
      "distância": 491.581
    },
    {
      "id": "l96-c41-c52",
      "origem": "c41",
      "destino": "c52",
      "distância": 423.725
    },
    {
      "id": "l97-c44-c59",
      "origem": "c44",
      "destino": "c59",
      "distância": 33.094
    },
    {
      "id": "l98-c56-c83",
      "origem": "c56",
      "destino": "c83",
      "distância": 484.868
    },
    {
      "id": "l99-c41-c54",
      "origem": "c41",
      "destino": "c54",
      "distância": 129.49
    },
    {
      "id": "l100-c22-c65",
      "origem": "c22",
      "destino": "c65",
      "distância": 337.016
    },
    {
      "id": "l101-c79-c85",
      "origem": "c79",
      "destino": "c85",
      "distância": 534.277
    },
    {
      "id": "l102-c44-c49",
      "origem": "c44",
      "destino": "c49",
      "distância": 322.646
    },
    {
      "id": "l103-c43-c68",
      "origem": "c43",
      "destino": "c68",
      "distância": 407.472
    },
    {
      "id": "l104-c6-c45",
      "origem": "c6",
      "destino": "c45",
      "distância": 530.843
    },
    {
      "id": "l105-c6-c46",
      "origem": "c6",
      "destino": "c46",
      "distância": 298.183
    },
    {
      "id": "l106-c8-c95",
      "origem": "c8",
      "destino": "c95",
      "distância": 90.327
    },
    {
      "id": "l107-c75-c95",
      "origem": "c75",
      "destino": "c95",
      "distância": 321.925
    },
    {
      "id": "l108-c59-c99",
      "origem": "c59",
      "destino": "c99",
      "distância": 488.398
    },
    {
      "id": "l109-c52-c91",
      "origem": "c52",
      "destino": "c91",
      "distância": 220.033
    },
    {
      "id": "l110-c24-c91",
      "origem": "c24",
      "destino": "c91",
      "distância": 218.769
    },
    {
      "id": "l111-c9-c18",
      "origem": "c9",
      "destino": "c18",
      "distância": 576.541
    },
    {
      "id": "l112-c43-c72",
      "origem": "c43",
      "destino": "c72",
      "distância": 506.405
    },
    {
      "id": "l113-c38-c50",
      "origem": "c38",
      "destino": "c50",
      "distância": 459.612
    },
    {
      "id": "l114-c48-c58",
      "origem": "c48",
      "destino": "c58",
      "distância": 221.517
    },
    {
      "id": "l115-c21-c44",
      "origem": "c21",
      "destino": "c44",
      "distância": 213.473
    },
    {
      "id": "l116-c70-c91",
      "origem": "c70",
      "destino": "c91",
      "distância": 12.509
    },
    {
      "id": "l117-c88-c96",
      "origem": "c88",
      "destino": "c96",
      "distância": 153.391
    },
    {
      "id": "l118-c61-c88",
      "origem": "c61",
      "destino": "c88",
      "distância": 483.283
    },
    {
      "id": "l119-c66-c85",
      "origem": "c66",
      "destino": "c85",
      "distância": 214.8
    },
    {
      "id": "l120-c33-c79",
      "origem": "c33",
      "destino": "c79",
      "distância": 17.65
    },
    {
      "id": "l121-c48-c80",
      "origem": "c48",
      "destino": "c80",
      "distância": 320.741
    },
    {
      "id": "l122-c42-c62",
      "origem": "c42",
      "destino": "c62",
      "distância": 197.317
    },
    {
      "id": "l123-c31-c92",
      "origem": "c31",
      "destino": "c92",
      "distância": 138.702
    },
    {
      "id": "l124-c39-c78",
      "origem": "c39",
      "destino": "c78",
      "distância": 155.987
    },
    {
      "id": "l125-c1-c26",
      "origem": "c1",
      "destino": "c26",
      "distância": 494.924
    },
    {
      "id": "l126-c11-c76",
      "origem": "c11",
      "destino": "c76",
      "distância": 353.175
    },
    {
      "id": "l127-c27-c49",
      "origem": "c27",
      "destino": "c49",
      "distância": 491.946
    },
    {
      "id": "l128-c13-c43",
      "origem": "c13",
      "destino": "c43",
      "distância": 173.901
    },
    {
      "id": "l129-c94-c96",
      "origem": "c94",
      "destino": "c96",
      "distância": 179.338
    },
    {
      "id": "l130-c61-c82",
      "origem": "c61",
      "destino": "c82",
      "distância": 232.292
    },
    {
      "id": "l131-c55-c57",
      "origem": "c55",
      "destino": "c57",
      "distância": 276.436
    },
    {
      "id": "l132-c51-c60",
      "origem": "c51",
      "destino": "c60",
      "distância": 293.638
    },
    {
      "id": "l133-c26-c55",
      "origem": "c26",
      "destino": "c55",
      "distância": 455.798
    },
    {
      "id": "l134-c10-c17",
      "origem": "c10",
      "destino": "c17",
      "distância": 209.364
    },
    {
      "id": "l135-c28-c67",
      "origem": "c28",
      "destino": "c67",
      "distância": 488.835
    },
    {
      "id": "l136-c3-c48",
      "origem": "c3",
      "destino": "c48",
      "distância": 338.93
    },
    {
      "id": "l137-c12-c91",
      "origem": "c12",
      "destino": "c91",
      "distância": 64.852
    },
    {
      "id": "l138-c78-c83",
      "origem": "c78",
      "destino": "c83",
      "distância": 159.239
    },
    {
      "id": "l139-c32-c99",
      "origem": "c32",
      "destino": "c99",
      "distância": 517.657
    },
    {
      "id": "l140-c35-c81",
      "origem": "c35",
      "destino": "c81",
      "distância": 387.458
    },
    {
      "id": "l141-c6-c85",
      "origem": "c6",
      "destino": "c85",
      "distância": 285.625
    },
    {
      "id": "l142-c11-c13",
      "origem": "c11",
      "destino": "c13",
      "distância": 261.72
    },
    {
      "id": "l143-c9-c83",
      "origem": "c9",
      "destino": "c83",
      "distância": 414.025
    },
    {
      "id": "l144-c11-c32",
      "origem": "c11",
      "destino": "c32",
      "distância": 542.207
    },
    {
      "id": "l145-c42-c45",
      "origem": "c42",
      "destino": "c45",
      "distância": 26.02
    },
    {
      "id": "l146-c32-c68",
      "origem": "c32",
      "destino": "c68",
      "distância": 83.646
    },
    {
      "id": "l147-c29-c91",
      "origem": "c29",
      "destino": "c91",
      "distância": 112.375
    },
    {
      "id": "l148-c13-c53",
      "origem": "c13",
      "destino": "c53",
      "distância": 141.823
    },
    {
      "id": "l149-c22-c26",
      "origem": "c22",
      "destino": "c26",
      "distância": 402.926
    },
    {
      "id": "l150-c53-c70",
      "origem": "c53",
      "destino": "c70",
      "distância": 554.599
    },
    {
      "id": "l151-c32-c96",
      "origem": "c32",
      "destino": "c96",
      "distância": 35.466
    },
    {
      "id": "l152-c65-c79",
      "origem": "c65",
      "destino": "c79",
      "distância": 398.489
    },
    {
      "id": "l153-c7-c38",
      "origem": "c7",
      "destino": "c38",
      "distância": 371.624
    },
    {
      "id": "l154-c34-c82",
      "origem": "c34",
      "destino": "c82",
      "distância": 527.266
    },
    {
      "id": "l155-c16-c28",
      "origem": "c16",
      "destino": "c28",
      "distância": 194.49
    },
    {
      "id": "l156-c44-c66",
      "origem": "c44",
      "destino": "c66",
      "distância": 311.268
    },
    {
      "id": "l157-c14-c56",
      "origem": "c14",
      "destino": "c56",
      "distância": 157.683
    },
    {
      "id": "l158-c13-c67",
      "origem": "c13",
      "destino": "c67",
      "distância": 395.724
    },
    {
      "id": "l159-c84-c87",
      "origem": "c84",
      "destino": "c87",
      "distância": 597.076
    },
    {
      "id": "l160-c74-c94",
      "origem": "c74",
      "destino": "c94",
      "distância": 251.095
    },
    {
      "id": "l161-c38-c64",
      "origem": "c38",
      "destino": "c64",
      "distância": 304.6
    },
    {
      "id": "l162-c31-c47",
      "origem": "c31",
      "destino": "c47",
      "distância": 471.405
    },
    {
      "id": "l163-c6-c93",
      "origem": "c6",
      "destino": "c93",
      "distância": 319.908
    },
    {
      "id": "l164-c28-c91",
      "origem": "c28",
      "destino": "c91",
      "distância": 466.198
    },
    {
      "id": "l165-c78-c89",
      "origem": "c78",
      "destino": "c89",
      "distância": 516.145
    },
    {
      "id": "l166-c27-c99",
      "origem": "c27",
      "destino": "c99",
      "distância": 226.404
    },
    {
      "id": "l167-c19-c44",
      "origem": "c19",
      "destino": "c44",
      "distância": 226.082
    },
    {
      "id": "l168-c19-c43",
      "origem": "c19",
      "destino": "c43",
      "distância": 205.617
    },
    {
      "id": "l169-c1-c38",
      "origem": "c1",
      "destino": "c38",
      "distância": 212.842
    },
    {
      "id": "l170-c50-c91",
      "origem": "c50",
      "destino": "c91",
      "distância": 303.634
    },
    {
      "id": "l171-c25-c99",
      "origem": "c25",
      "destino": "c99",
      "distância": 590.327
    },
    {
      "id": "l172-c52-c99",
      "origem": "c52",
      "destino": "c99",
      "distância": 420.329
    },
    {
      "id": "l173-c2-c7",
      "origem": "c2",
      "destino": "c7",
      "distância": 362.35
    },
    {
      "id": "l174-c17-c62",
      "origem": "c17",
      "destino": "c62",
      "distância": 354.711
    },
    {
      "id": "l175-c32-c62",
      "origem": "c32",
      "destino": "c62",
      "distância": 447.817
    },
    {
      "id": "l176-c91-c97",
      "origem": "c91",
      "destino": "c97",
      "distância": 512.873
    },
    {
      "id": "l177-c85-c88",
      "origem": "c85",
      "destino": "c88",
      "distância": 512.389
    },
    {
      "id": "l178-c13-c36",
      "origem": "c13",
      "destino": "c36",
      "distância": 376.627
    },
    {
      "id": "l179-c32-c73",
      "origem": "c32",
      "destino": "c73",
      "distância": 163.067
    },
    {
      "id": "l180-c15-c64",
      "origem": "c15",
      "destino": "c64",
      "distância": 140.457
    },
    {
      "id": "l181-c42-c81",
      "origem": "c42",
      "destino": "c81",
      "distância": 40.833
    },
    {
      "id": "l182-c43-c93",
      "origem": "c43",
      "destino": "c93",
      "distância": 87.535
    },
    {
      "id": "l183-c9-c26",
      "origem": "c9",
      "destino": "c26",
      "distância": 249.991
    },
    {
      "id": "l184-c60-c93",
      "origem": "c60",
      "destino": "c93",
      "distância": 532.365
    },
    {
      "id": "l185-c35-c41",
      "origem": "c35",
      "destino": "c41",
      "distância": 488.021
    },
    {
      "id": "l186-c6-c68",
      "origem": "c6",
      "destino": "c68",
      "distância": 312.406
    },
    {
      "id": "l187-c20-c86",
      "origem": "c20",
      "destino": "c86",
      "distância": 122.383
    },
    {
      "id": "l188-c14-c63",
      "origem": "c14",
      "destino": "c63",
      "distância": 561.828
    },
    {
      "id": "l189-c36-c75",
      "origem": "c36",
      "destino": "c75",
      "distância": 196.086
    },
    {
      "id": "l190-c22-c68",
      "origem": "c22",
      "destino": "c68",
      "distância": 19.946
    },
    {
      "id": "l191-c44-c88",
      "origem": "c44",
      "destino": "c88",
      "distância": 82.239
    },
    {
      "id": "l192-c45-c74",
      "origem": "c45",
      "destino": "c74",
      "distância": 123.534
    },
    {
      "id": "l193-c13-c97",
      "origem": "c13",
      "destino": "c97",
      "distância": 468.186
    },
    {
      "id": "l194-c21-c92",
      "origem": "c21",
      "destino": "c92",
      "distância": 408.576
    },
    {
      "id": "l195-c71-c93",
      "origem": "c71",
      "destino": "c93",
      "distância": 531.189
    },
    {
      "id": "l196-c8-c29",
      "origem": "c8",
      "destino": "c29",
      "distância": 61.731
    },
    {
      "id": "l197-c65-c69",
      "origem": "c65",
      "destino": "c69",
      "distância": 207.972
    },
    {
      "id": "l198-c30-c53",
      "origem": "c30",
      "destino": "c53",
      "distância": 454.338
    },
    {
      "id": "l199-c50-c77",
      "origem": "c50",
      "destino": "c77",
      "distância": 537.804
    },
    {
      "id": "l200-c5-c63",
      "origem": "c5",
      "destino": "c63",
      "distância": 53.705
    },
    {
      "id": "l201-c64-c92",
      "origem": "c64",
      "destino": "c92",
      "distância": 406.564
    },
    {
      "id": "l202-c72-c77",
      "origem": "c72",
      "destino": "c77",
      "distância": 444.788
    },
    {
      "id": "l203-c37-c75",
      "origem": "c37",
      "destino": "c75",
      "distância": 42.938
    },
    {
      "id": "l204-c46-c91",
      "origem": "c46",
      "destino": "c91",
      "distância": 61.32
    },
    {
      "id": "l205-c84-c96",
      "origem": "c84",
      "destino": "c96",
      "distância": 413.118
    },
    {
      "id": "l206-c23-c63",
      "origem": "c23",
      "destino": "c63",
      "distância": 68.018
    },
    {
      "id": "l207-c14-c42",
      "origem": "c14",
      "destino": "c42",
      "distância": 157.837
    },
    {
      "id": "l208-c46-c74",
      "origem": "c46",
      "destino": "c74",
      "distância": 520.109
    },
    {
      "id": "l209-c36-c59",
      "origem": "c36",
      "destino": "c59",
      "distância": 506.954
    },
    {
      "id": "l210-c5-c80",
      "origem": "c5",
      "destino": "c80",
      "distância": 34.891
    },
    {
      "id": "l211-c34-c96",
      "origem": "c34",
      "destino": "c96",
      "distância": 259.576
    },
    {
      "id": "l212-c30-c38",
      "origem": "c30",
      "destino": "c38",
      "distância": 95.569
    },
    {
      "id": "l213-c33-c63",
      "origem": "c33",
      "destino": "c63",
      "distância": 577.131
    },
    {
      "id": "l214-c25-c38",
      "origem": "c25",
      "destino": "c38",
      "distância": 492.325
    },
    {
      "id": "l215-c34-c51",
      "origem": "c34",
      "destino": "c51",
      "distância": 550.009
    },
    {
      "id": "l216-c62-c86",
      "origem": "c62",
      "destino": "c86",
      "distância": 242.612
    },
    {
      "id": "l217-c29-c39",
      "origem": "c29",
      "destino": "c39",
      "distância": 40.199
    },
    {
      "id": "l218-c18-c49",
      "origem": "c18",
      "destino": "c49",
      "distância": 90.246
    },
    {
      "id": "l219-c50-c85",
      "origem": "c50",
      "destino": "c85",
      "distância": 19.181
    },
    {
      "id": "l220-c28-c51",
      "origem": "c28",
      "destino": "c51",
      "distância": 308.022
    },
    {
      "id": "l221-c19-c41",
      "origem": "c19",
      "destino": "c41",
      "distância": 90.09
    },
    {
      "id": "l222-c8-c87",
      "origem": "c8",
      "destino": "c87",
      "distância": 538.498
    },
    {
      "id": "l223-c18-c69",
      "origem": "c18",
      "destino": "c69",
      "distância": 183.166
    },
    {
      "id": "l224-c51-c99",
      "origem": "c51",
      "destino": "c99",
      "distância": 369.737
    },
    {
      "id": "l225-c70-c73",
      "origem": "c70",
      "destino": "c73",
      "distância": 197.829
    },
    {
      "id": "l226-c1-c65",
      "origem": "c1",
      "destino": "c65",
      "distância": 68.958
    },
    {
      "id": "l227-c47-c63",
      "origem": "c47",
      "destino": "c63",
      "distância": 491.837
    },
    {
      "id": "l228-c60-c86",
      "origem": "c60",
      "destino": "c86",
      "distância": 562.975
    },
    {
      "id": "l229-c13-c32",
      "origem": "c13",
      "destino": "c32",
      "distância": 364.876
    },
    {
      "id": "l230-c73-c98",
      "origem": "c73",
      "destino": "c98",
      "distância": 480.421
    },
    {
      "id": "l231-c4-c55",
      "origem": "c4",
      "destino": "c55",
      "distância": 155.215
    },
    {
      "id": "l232-c77-c89",
      "origem": "c77",
      "destino": "c89",
      "distância": 66.219
    },
    {
      "id": "l233-c25-c69",
      "origem": "c25",
      "destino": "c69",
      "distância": 468.822
    },
    {
      "id": "l234-c50-c88",
      "origem": "c50",
      "destino": "c88",
      "distância": 400.415
    },
    {
      "id": "l235-c28-c70",
      "origem": "c28",
      "destino": "c70",
      "distância": 463.999
    },
    {
      "id": "l236-c16-c30",
      "origem": "c16",
      "destino": "c30",
      "distância": 37.219
    },
    {
      "id": "l237-c73-c97",
      "origem": "c73",
      "destino": "c97",
      "distância": 66.989
    },
    {
      "id": "l238-c23-c28",
      "origem": "c23",
      "destino": "c28",
      "distância": 574.937
    },
    {
      "id": "l239-c21-c82",
      "origem": "c21",
      "destino": "c82",
      "distância": 478.597
    },
    {
      "id": "l240-c44-c56",
      "origem": "c44",
      "destino": "c56",
      "distância": 526.206
    },
    {
      "id": "l241-c11-c26",
      "origem": "c11",
      "destino": "c26",
      "distância": 442.342
    },
    {
      "id": "l242-c40-c72",
      "origem": "c40",
      "destino": "c72",
      "distância": 284.788
    },
    {
      "id": "l243-c4-c20",
      "origem": "c4",
      "destino": "c20",
      "distância": 583.488
    },
    {
      "id": "l244-c45-c90",
      "origem": "c45",
      "destino": "c90",
      "distância": 486.062
    },
    {
      "id": "l245-c3-c6",
      "origem": "c3",
      "destino": "c6",
      "distância": 502.616
    },
    {
      "id": "l246-c54-c90",
      "origem": "c54",
      "destino": "c90",
      "distância": 72.469
    },
    {
      "id": "l247-c33-c86",
      "origem": "c33",
      "destino": "c86",
      "distância": 557.873
    },
    {
      "id": "l248-c52-c71",
      "origem": "c52",
      "destino": "c71",
      "distância": 513.307
    },
    {
      "id": "l249-c60-c71",
      "origem": "c60",
      "destino": "c71",
      "distância": 145.687
    },
    {
      "id": "l250-c41-c49",
      "origem": "c41",
      "destino": "c49",
      "distância": 593.63
    },
    {
      "id": "l251-c43-c49",
      "origem": "c43",
      "destino": "c49",
      "distância": 198.616
    },
    {
      "id": "l252-c7-c57",
      "origem": "c7",
      "destino": "c57",
      "distância": 267.126
    },
    {
      "id": "l253-c28-c96",
      "origem": "c28",
      "destino": "c96",
      "distância": 320.007
    },
    {
      "id": "l254-c5-c94",
      "origem": "c5",
      "destino": "c94",
      "distância": 457.451
    },
    {
      "id": "l255-c22-c56",
      "origem": "c22",
      "destino": "c56",
      "distância": 530.075
    },
    {
      "id": "l256-c65-c95",
      "origem": "c65",
      "destino": "c95",
      "distância": 558.134
    },
    {
      "id": "l257-c15-c86",
      "origem": "c15",
      "destino": "c86",
      "distância": 62.819
    },
    {
      "id": "l258-c4-c40",
      "origem": "c4",
      "destino": "c40",
      "distância": 248.642
    },
    {
      "id": "l259-c19-c27",
      "origem": "c19",
      "destino": "c27",
      "distância": 114.323
    },
    {
      "id": "l260-c34-c60",
      "origem": "c34",
      "destino": "c60",
      "distância": 283.001
    },
    {
      "id": "l261-c18-c81",
      "origem": "c18",
      "destino": "c81",
      "distância": 451.325
    },
    {
      "id": "l262-c5-c76",
      "origem": "c5",
      "destino": "c76",
      "distância": 212.328
    },
    {
      "id": "l263-c74-c77",
      "origem": "c74",
      "destino": "c77",
      "distância": 252.8
    },
    {
      "id": "l264-c18-c91",
      "origem": "c18",
      "destino": "c91",
      "distância": 60.898
    },
    {
      "id": "l265-c22-c74",
      "origem": "c22",
      "destino": "c74",
      "distância": 336.842
    },
    {
      "id": "l266-c27-c47",
      "origem": "c27",
      "destino": "c47",
      "distância": 17.56
    },
    {
      "id": "l267-c4-c35",
      "origem": "c4",
      "destino": "c35",
      "distância": 28.292
    },
    {
      "id": "l268-c44-c80",
      "origem": "c44",
      "destino": "c80",
      "distância": 439.9
    },
    {
      "id": "l269-c35-c37",
      "origem": "c35",
      "destino": "c37",
      "distância": 228.507
    },
    {
      "id": "l270-c60-c98",
      "origem": "c60",
      "destino": "c98",
      "distância": 124.924
    },
    {
      "id": "l271-c63-c70",
      "origem": "c63",
      "destino": "c70",
      "distância": 312.969
    },
    {
      "id": "l272-c1-c94",
      "origem": "c1",
      "destino": "c94",
      "distância": 574.698
    },
    {
      "id": "l273-c11-c90",
      "origem": "c11",
      "destino": "c90",
      "distância": 259.297
    },
    {
      "id": "l274-c72-c88",
      "origem": "c72",
      "destino": "c88",
      "distância": 579.135
    },
    {
      "id": "l275-c68-c95",
      "origem": "c68",
      "destino": "c95",
      "distância": 448.642
    },
    {
      "id": "l276-c34-c100",
      "origem": "c34",
      "destino": "c100",
      "distância": 274.051
    },
    {
      "id": "l277-c66-c71",
      "origem": "c66",
      "destino": "c71",
      "distância": 530.516
    },
    {
      "id": "l278-c7-c31",
      "origem": "c7",
      "destino": "c31",
      "distância": 202.381
    },
    {
      "id": "l279-c65-c93",
      "origem": "c65",
      "destino": "c93",
      "distância": 94.15
    },
    {
      "id": "l280-c63-c97",
      "origem": "c63",
      "destino": "c97",
      "distância": 133.805
    },
    {
      "id": "l281-c97-c99",
      "origem": "c97",
      "destino": "c99",
      "distância": 206.768
    },
    {
      "id": "l282-c31-c95",
      "origem": "c31",
      "destino": "c95",
      "distância": 459.509
    },
    {
      "id": "l283-c11-c53",
      "origem": "c11",
      "destino": "c53",
      "distância": 576.44
    },
    {
      "id": "l284-c15-c75",
      "origem": "c15",
      "destino": "c75",
      "distância": 476.887
    },
    {
      "id": "l285-c73-c82",
      "origem": "c73",
      "destino": "c82",
      "distância": 575.551
    },
    {
      "id": "l286-c19-c23",
      "origem": "c19",
      "destino": "c23",
      "distância": 335.471
    },
    {
      "id": "l287-c9-c77",
      "origem": "c9",
      "destino": "c77",
      "distância": 302.11
    },
    {
      "id": "l288-c9-c55",
      "origem": "c9",
      "destino": "c55",
      "distância": 518.405
    },
    {
      "id": "l289-c19-c24",
      "origem": "c19",
      "destino": "c24",
      "distância": 177.16
    },
    {
      "id": "l290-c56-c87",
      "origem": "c56",
      "destino": "c87",
      "distância": 396.247
    },
    {
      "id": "l291-c37-c64",
      "origem": "c37",
      "destino": "c64",
      "distância": 455.636
    },
    {
      "id": "l292-c39-c99",
      "origem": "c39",
      "destino": "c99",
      "distância": 203.639
    },
    {
      "id": "l293-c15-c16",
      "origem": "c15",
      "destino": "c16",
      "distância": 328.627
    },
    {
      "id": "l294-c41-c42",
      "origem": "c41",
      "destino": "c42",
      "distância": 139.712
    },
    {
      "id": "l295-c5-c62",
      "origem": "c5",
      "destino": "c62",
      "distância": 17.496
    },
    {
      "id": "l296-c29-c53",
      "origem": "c29",
      "destino": "c53",
      "distância": 577.742
    },
    {
      "id": "l297-c40-c86",
      "origem": "c40",
      "destino": "c86",
      "distância": 472.772
    },
    {
      "id": "l298-c10-c27",
      "origem": "c10",
      "destino": "c27",
      "distância": 28.253
    },
    {
      "id": "l299-c21-c65",
      "origem": "c21",
      "destino": "c65",
      "distância": 180.399
    },
    {
      "id": "l300-c32-c63",
      "origem": "c32",
      "destino": "c63",
      "distância": 360.206
    },
    {
      "id": "l301-c24-c48",
      "origem": "c24",
      "destino": "c48",
      "distância": 546.967
    },
    {
      "id": "l302-c60-c89",
      "origem": "c60",
      "destino": "c89",
      "distância": 486.397
    },
    {
      "id": "l303-c93-c100",
      "origem": "c93",
      "destino": "c100",
      "distância": 566.509
    },
    {
      "id": "l304-c17-c33",
      "origem": "c17",
      "destino": "c33",
      "distância": 431.615
    },
    {
      "id": "l305-c55-c94",
      "origem": "c55",
      "destino": "c94",
      "distância": 407.394
    },
    {
      "id": "l306-c1-c43",
      "origem": "c1",
      "destino": "c43",
      "distância": 182.697
    },
    {
      "id": "l307-c58-c83",
      "origem": "c58",
      "destino": "c83",
      "distância": 71.728
    },
    {
      "id": "l308-c3-c28",
      "origem": "c3",
      "destino": "c28",
      "distância": 444.201
    },
    {
      "id": "l309-c14-c33",
      "origem": "c14",
      "destino": "c33",
      "distância": 576.993
    },
    {
      "id": "l310-c60-c92",
      "origem": "c60",
      "destino": "c92",
      "distância": 261.035
    },
    {
      "id": "l311-c15-c80",
      "origem": "c15",
      "destino": "c80",
      "distância": 12.264
    },
    {
      "id": "l312-c57-c84",
      "origem": "c57",
      "destino": "c84",
      "distância": 447.979
    },
    {
      "id": "l313-c15-c66",
      "origem": "c15",
      "destino": "c66",
      "distância": 136.38
    },
    {
      "id": "l314-c28-c64",
      "origem": "c28",
      "destino": "c64",
      "distância": 548.544
    },
    {
      "id": "l315-c32-c53",
      "origem": "c32",
      "destino": "c53",
      "distância": 160.053
    },
    {
      "id": "l316-c75-c76",
      "origem": "c75",
      "destino": "c76",
      "distância": 406.813
    },
    {
      "id": "l317-c7-c28",
      "origem": "c7",
      "destino": "c28",
      "distância": 489.294
    },
    {
      "id": "l318-c29-c43",
      "origem": "c29",
      "destino": "c43",
      "distância": 394.179
    },
    {
      "id": "l319-c28-c74",
      "origem": "c28",
      "destino": "c74",
      "distância": 328.081
    },
    {
      "id": "l320-c11-c89",
      "origem": "c11",
      "destino": "c89",
      "distância": 183.768
    },
    {
      "id": "l321-c9-c69",
      "origem": "c9",
      "destino": "c69",
      "distância": 115.728
    },
    {
      "id": "l322-c47-c85",
      "origem": "c47",
      "destino": "c85",
      "distância": 16.24
    },
    {
      "id": "l323-c26-c73",
      "origem": "c26",
      "destino": "c73",
      "distância": 548.787
    },
    {
      "id": "l324-c4-c34",
      "origem": "c4",
      "destino": "c34",
      "distância": 435.097
    },
    {
      "id": "l325-c18-c94",
      "origem": "c18",
      "destino": "c94",
      "distância": 65.664
    },
    {
      "id": "l326-c25-c35",
      "origem": "c25",
      "destino": "c35",
      "distância": 359.013
    },
    {
      "id": "l327-c22-c24",
      "origem": "c22",
      "destino": "c24",
      "distância": 379.004
    },
    {
      "id": "l328-c27-c37",
      "origem": "c27",
      "destino": "c37",
      "distância": 554.218
    },
    {
      "id": "l329-c73-c100",
      "origem": "c73",
      "destino": "c100",
      "distância": 598.808
    },
    {
      "id": "l330-c23-c84",
      "origem": "c23",
      "destino": "c84",
      "distância": 571.695
    },
    {
      "id": "l331-c11-c80",
      "origem": "c11",
      "destino": "c80",
      "distância": 184.375
    },
    {
      "id": "l332-c16-c93",
      "origem": "c16",
      "destino": "c93",
      "distância": 527.843
    },
    {
      "id": "l333-c19-c58",
      "origem": "c19",
      "destino": "c58",
      "distância": 36.394
    },
    {
      "id": "l334-c13-c37",
      "origem": "c13",
      "destino": "c37",
      "distância": 181.361
    },
    {
      "id": "l335-c31-c67",
      "origem": "c31",
      "destino": "c67",
      "distância": 176.833
    },
    {
      "id": "l336-c31-c54",
      "origem": "c31",
      "destino": "c54",
      "distância": 393.563
    },
    {
      "id": "l337-c9-c74",
      "origem": "c9",
      "destino": "c74",
      "distância": 257.123
    },
    {
      "id": "l338-c38-c56",
      "origem": "c38",
      "destino": "c56",
      "distância": 466.485
    },
    {
      "id": "l339-c56-c73",
      "origem": "c56",
      "destino": "c73",
      "distância": 476.968
    },
    {
      "id": "l340-c53-c75",
      "origem": "c53",
      "destino": "c75",
      "distância": 123.23
    },
    {
      "id": "l341-c14-c85",
      "origem": "c14",
      "destino": "c85",
      "distância": 33.73
    },
    {
      "id": "l342-c71-c77",
      "origem": "c71",
      "destino": "c77",
      "distância": 468.225
    },
    {
      "id": "l343-c4-c24",
      "origem": "c4",
      "destino": "c24",
      "distância": 557.734
    },
    {
      "id": "l344-c95-c100",
      "origem": "c95",
      "destino": "c100",
      "distância": 420.283
    },
    {
      "id": "l345-c39-c42",
      "origem": "c39",
      "destino": "c42",
      "distância": 203.565
    },
    {
      "id": "l346-c6-c21",
      "origem": "c6",
      "destino": "c21",
      "distância": 311.214
    },
    {
      "id": "l347-c55-c96",
      "origem": "c55",
      "destino": "c96",
      "distância": 152.563
    },
    {
      "id": "l348-c68-c77",
      "origem": "c68",
      "destino": "c77",
      "distância": 146.555
    },
    {
      "id": "l349-c56-c61",
      "origem": "c56",
      "destino": "c61",
      "distância": 219.362
    },
    {
      "id": "l350-c48-c95",
      "origem": "c48",
      "destino": "c95",
      "distância": 209.211
    },
    {
      "id": "l351-c75-c84",
      "origem": "c75",
      "destino": "c84",
      "distância": 47.987
    },
    {
      "id": "l352-c16-c38",
      "origem": "c16",
      "destino": "c38",
      "distância": 451.454
    },
    {
      "id": "l353-c63-c85",
      "origem": "c63",
      "destino": "c85",
      "distância": 167.614
    },
    {
      "id": "l354-c68-c84",
      "origem": "c68",
      "destino": "c84",
      "distância": 50.478
    },
    {
      "id": "l355-c89-c94",
      "origem": "c89",
      "destino": "c94",
      "distância": 127.028
    },
    {
      "id": "l356-c12-c56",
      "origem": "c12",
      "destino": "c56",
      "distância": 453.46
    },
    {
      "id": "l357-c9-c29",
      "origem": "c9",
      "destino": "c29",
      "distância": 75.706
    },
    {
      "id": "l358-c2-c55",
      "origem": "c2",
      "destino": "c55",
      "distância": 255.138
    },
    {
      "id": "l359-c17-c38",
      "origem": "c17",
      "destino": "c38",
      "distância": 163.324
    },
    {
      "id": "l360-c2-c13",
      "origem": "c2",
      "destino": "c13",
      "distância": 240.992
    },
    {
      "id": "l361-c8-c9",
      "origem": "c8",
      "destino": "c9",
      "distância": 444.907
    },
    {
      "id": "l362-c45-c70",
      "origem": "c45",
      "destino": "c70",
      "distância": 591.613
    },
    {
      "id": "l363-c45-c57",
      "origem": "c45",
      "destino": "c57",
      "distância": 271.91
    },
    {
      "id": "l364-c49-c50",
      "origem": "c49",
      "destino": "c50",
      "distância": 552.899
    },
    {
      "id": "l365-c18-c26",
      "origem": "c18",
      "destino": "c26",
      "distância": 242.311
    },
    {
      "id": "l366-c57-c93",
      "origem": "c57",
      "destino": "c93",
      "distância": 507.445
    },
    {
      "id": "l367-c15-c18",
      "origem": "c15",
      "destino": "c18",
      "distância": 294.129
    },
    {
      "id": "l368-c58-c61",
      "origem": "c58",
      "destino": "c61",
      "distância": 293.664
    },
    {
      "id": "l369-c92-c99",
      "origem": "c92",
      "destino": "c99",
      "distância": 552.256
    },
    {
      "id": "l370-c56-c80",
      "origem": "c56",
      "destino": "c80",
      "distância": 471.449
    },
    {
      "id": "l371-c39-c68",
      "origem": "c39",
      "destino": "c68",
      "distância": 364.354
    },
    {
      "id": "l372-c8-c47",
      "origem": "c8",
      "destino": "c47",
      "distância": 299.391
    },
    {
      "id": "l373-c22-c87",
      "origem": "c22",
      "destino": "c87",
      "distância": 291.72
    },
    {
      "id": "l374-c50-c78",
      "origem": "c50",
      "destino": "c78",
      "distância": 596.835
    },
    {
      "id": "l375-c26-c82",
      "origem": "c26",
      "destino": "c82",
      "distância": 23.39
    },
    {
      "id": "l376-c62-c95",
      "origem": "c62",
      "destino": "c95",
      "distância": 544.08
    },
    {
      "id": "l377-c13-c75",
      "origem": "c13",
      "destino": "c75",
      "distância": 322.169
    },
    {
      "id": "l378-c64-c67",
      "origem": "c64",
      "destino": "c67",
      "distância": 367.512
    },
    {
      "id": "l379-c19-c22",
      "origem": "c19",
      "destino": "c22",
      "distância": 592.856
    },
    {
      "id": "l380-c65-c91",
      "origem": "c65",
      "destino": "c91",
      "distância": 111.296
    },
    {
      "id": "l381-c6-c32",
      "origem": "c6",
      "destino": "c32",
      "distância": 492.355
    },
    {
      "id": "l382-c69-c91",
      "origem": "c69",
      "destino": "c91",
      "distância": 424.046
    },
    {
      "id": "l383-c3-c66",
      "origem": "c3",
      "destino": "c66",
      "distância": 37.482
    },
    {
      "id": "l384-c14-c95",
      "origem": "c14",
      "destino": "c95",
      "distância": 465.107
    },
    {
      "id": "l385-c52-c72",
      "origem": "c52",
      "destino": "c72",
      "distância": 197.071
    },
    {
      "id": "l386-c80-c88",
      "origem": "c80",
      "destino": "c88",
      "distância": 515.666
    },
    {
      "id": "l387-c36-c100",
      "origem": "c36",
      "destino": "c100",
      "distância": 51.738
    },
    {
      "id": "l388-c13-c22",
      "origem": "c13",
      "destino": "c22",
      "distância": 226.729
    },
    {
      "id": "l389-c14-c60",
      "origem": "c14",
      "destino": "c60",
      "distância": 187.242
    },
    {
      "id": "l390-c36-c56",
      "origem": "c36",
      "destino": "c56",
      "distância": 505.237
    },
    {
      "id": "l391-c3-c67",
      "origem": "c3",
      "destino": "c67",
      "distância": 336.825
    },
    {
      "id": "l392-c75-c78",
      "origem": "c75",
      "destino": "c78",
      "distância": 302.571
    },
    {
      "id": "l393-c38-c57",
      "origem": "c38",
      "destino": "c57",
      "distância": 556.229
    },
    {
      "id": "l394-c42-c51",
      "origem": "c42",
      "destino": "c51",
      "distância": 359.377
    },
    {
      "id": "l395-c47-c62",
      "origem": "c47",
      "destino": "c62",
      "distância": 24.689
    },
    {
      "id": "l396-c5-c96",
      "origem": "c5",
      "destino": "c96",
      "distância": 499.936
    },
    {
      "id": "l397-c59-c74",
      "origem": "c59",
      "destino": "c74",
      "distância": 388.819
    },
    {
      "id": "l398-c46-c67",
      "origem": "c46",
      "destino": "c67",
      "distância": 162.44
    },
    {
      "id": "l399-c24-c88",
      "origem": "c24",
      "destino": "c88",
      "distância": 382.294
    },
    {
      "id": "l400-c61-c83",
      "origem": "c61",
      "destino": "c83",
      "distância": 304.008
    },
    {
      "id": "l401-c9-c57",
      "origem": "c9",
      "destino": "c57",
      "distância": 452.408
    },
    {
      "id": "l402-c17-c37",
      "origem": "c17",
      "destino": "c37",
      "distância": 517.425
    },
    {
      "id": "l403-c45-c48",
      "origem": "c45",
      "destino": "c48",
      "distância": 365.872
    },
    {
      "id": "l404-c26-c45",
      "origem": "c26",
      "destino": "c45",
      "distância": 47.201
    },
    {
      "id": "l405-c48-c71",
      "origem": "c48",
      "destino": "c71",
      "distância": 294.195
    },
    {
      "id": "l406-c64-c88",
      "origem": "c64",
      "destino": "c88",
      "distância": 224.532
    },
    {
      "id": "l407-c1-c97",
      "origem": "c1",
      "destino": "c97",
      "distância": 576.357
    },
    {
      "id": "l408-c5-c92",
      "origem": "c5",
      "destino": "c92",
      "distância": 366.443
    },
    {
      "id": "l409-c65-c96",
      "origem": "c65",
      "destino": "c96",
      "distância": 112.691
    },
    {
      "id": "l410-c74-c99",
      "origem": "c74",
      "destino": "c99",
      "distância": 313.482
    },
    {
      "id": "l411-c80-c100",
      "origem": "c80",
      "destino": "c100",
      "distância": 579.729
    },
    {
      "id": "l412-c17-c25",
      "origem": "c17",
      "destino": "c25",
      "distância": 363.594
    },
    {
      "id": "l413-c74-c97",
      "origem": "c74",
      "destino": "c97",
      "distância": 448.004
    },
    {
      "id": "l414-c59-c93",
      "origem": "c59",
      "destino": "c93",
      "distância": 14.496
    },
    {
      "id": "l415-c48-c69",
      "origem": "c48",
      "destino": "c69",
      "distância": 33.838
    },
    {
      "id": "l416-c15-c65",
      "origem": "c15",
      "destino": "c65",
      "distância": 253.492
    },
    {
      "id": "l417-c18-c22",
      "origem": "c18",
      "destino": "c22",
      "distância": 192.602
    },
    {
      "id": "l418-c2-c41",
      "origem": "c2",
      "destino": "c41",
      "distância": 443.194
    },
    {
      "id": "l419-c67-c94",
      "origem": "c67",
      "destino": "c94",
      "distância": 101.186
    },
    {
      "id": "l420-c1-c33",
      "origem": "c1",
      "destino": "c33",
      "distância": 7.425
    },
    {
      "id": "l421-c18-c47",
      "origem": "c18",
      "destino": "c47",
      "distância": 408.883
    },
    {
      "id": "l422-c52-c59",
      "origem": "c52",
      "destino": "c59",
      "distância": 212.436
    },
    {
      "id": "l423-c25-c60",
      "origem": "c25",
      "destino": "c60",
      "distância": 143.288
    },
    {
      "id": "l424-c12-c29",
      "origem": "c12",
      "destino": "c29",
      "distância": 331.632
    },
    {
      "id": "l425-c58-c84",
      "origem": "c58",
      "destino": "c84",
      "distância": 570.642
    },
    {
      "id": "l426-c7-c93",
      "origem": "c7",
      "destino": "c93",
      "distância": 360.52
    },
    {
      "id": "l427-c44-c75",
      "origem": "c44",
      "destino": "c75",
      "distância": 267.297
    },
    {
      "id": "l428-c18-c62",
      "origem": "c18",
      "destino": "c62",
      "distância": 180.411
    },
    {
      "id": "l429-c3-c42",
      "origem": "c3",
      "destino": "c42",
      "distância": 306.548
    },
    {
      "id": "l430-c66-c78",
      "origem": "c66",
      "destino": "c78",
      "distância": 249.28
    },
    {
      "id": "l431-c32-c66",
      "origem": "c32",
      "destino": "c66",
      "distância": 282.464
    },
    {
      "id": "l432-c23-c71",
      "origem": "c23",
      "destino": "c71",
      "distância": 86.677
    },
    {
      "id": "l433-c47-c51",
      "origem": "c47",
      "destino": "c51",
      "distância": 440.385
    },
    {
      "id": "l434-c26-c57",
      "origem": "c26",
      "destino": "c57",
      "distância": 465.524
    },
    {
      "id": "l435-c1-c23",
      "origem": "c1",
      "destino": "c23",
      "distância": 101.703
    },
    {
      "id": "l436-c48-c62",
      "origem": "c48",
      "destino": "c62",
      "distância": 229.99
    },
    {
      "id": "l437-c15-c74",
      "origem": "c15",
      "destino": "c74",
      "distância": 441.188
    },
    {
      "id": "l438-c3-c14",
      "origem": "c3",
      "destino": "c14",
      "distância": 511.423
    },
    {
      "id": "l439-c68-c82",
      "origem": "c68",
      "destino": "c82",
      "distância": 127.314
    },
    {
      "id": "l440-c88-c89",
      "origem": "c88",
      "destino": "c89",
      "distância": 44.426
    },
    {
      "id": "l441-c31-c41",
      "origem": "c31",
      "destino": "c41",
      "distância": 449.722
    },
    {
      "id": "l442-c24-c50",
      "origem": "c24",
      "destino": "c50",
      "distância": 549.258
    },
    {
      "id": "l443-c65-c81",
      "origem": "c65",
      "destino": "c81",
      "distância": 326.445
    },
    {
      "id": "l444-c29-c82",
      "origem": "c29",
      "destino": "c82",
      "distância": 529.292
    },
    {
      "id": "l445-c4-c81",
      "origem": "c4",
      "destino": "c81",
      "distância": 507.378
    },
    {
      "id": "l446-c70-c71",
      "origem": "c70",
      "destino": "c71",
      "distância": 6.118
    },
    {
      "id": "l447-c21-c78",
      "origem": "c21",
      "destino": "c78",
      "distância": 89.208
    },
    {
      "id": "l448-c11-c73",
      "origem": "c11",
      "destino": "c73",
      "distância": 190.77
    },
    {
      "id": "l449-c51-c86",
      "origem": "c51",
      "destino": "c86",
      "distância": 41.515
    },
    {
      "id": "l450-c11-c65",
      "origem": "c11",
      "destino": "c65",
      "distância": 186.616
    },
    {
      "id": "l451-c28-c83",
      "origem": "c28",
      "destino": "c83",
      "distância": 370.587
    },
    {
      "id": "l452-c36-c49",
      "origem": "c36",
      "destino": "c49",
      "distância": 7.263
    },
    {
      "id": "l453-c20-c90",
      "origem": "c20",
      "destino": "c90",
      "distância": 210.606
    },
    {
      "id": "l454-c45-c49",
      "origem": "c45",
      "destino": "c49",
      "distância": 593.059
    },
    {
      "id": "l455-c19-c95",
      "origem": "c19",
      "destino": "c95",
      "distância": 229.424
    },
    {
      "id": "l456-c47-c80",
      "origem": "c47",
      "destino": "c80",
      "distância": 257.072
    },
    {
      "id": "l457-c49-c71",
      "origem": "c49",
      "destino": "c71",
      "distância": 487.653
    },
    {
      "id": "l458-c19-c46",
      "origem": "c19",
      "destino": "c46",
      "distância": 536.939
    },
    {
      "id": "l459-c18-c38",
      "origem": "c18",
      "destino": "c38",
      "distância": 42.841
    },
    {
      "id": "l460-c90-c96",
      "origem": "c90",
      "destino": "c96",
      "distância": 392.917
    },
    {
      "id": "l461-c37-c52",
      "origem": "c37",
      "destino": "c52",
      "distância": 498.366
    },
    {
      "id": "l462-c52-c98",
      "origem": "c52",
      "destino": "c98",
      "distância": 466.914
    },
    {
      "id": "l463-c16-c62",
      "origem": "c16",
      "destino": "c62",
      "distância": 305.914
    },
    {
      "id": "l464-c36-c92",
      "origem": "c36",
      "destino": "c92",
      "distância": 402.965
    },
    {
      "id": "l465-c46-c70",
      "origem": "c46",
      "destino": "c70",
      "distância": 138.607
    },
    {
      "id": "l466-c41-c48",
      "origem": "c41",
      "destino": "c48",
      "distância": 413.559
    },
    {
      "id": "l467-c6-c20",
      "origem": "c6",
      "destino": "c20",
      "distância": 174.106
    },
    {
      "id": "l468-c53-c79",
      "origem": "c53",
      "destino": "c79",
      "distância": 491.892
    },
    {
      "id": "l469-c46-c52",
      "origem": "c46",
      "destino": "c52",
      "distância": 241.728
    },
    {
      "id": "l470-c19-c48",
      "origem": "c19",
      "destino": "c48",
      "distância": 312.402
    },
    {
      "id": "l471-c28-c47",
      "origem": "c28",
      "destino": "c47",
      "distância": 374.468
    },
    {
      "id": "l472-c8-c58",
      "origem": "c8",
      "destino": "c58",
      "distância": 377.795
    },
    {
      "id": "l473-c58-c82",
      "origem": "c58",
      "destino": "c82",
      "distância": 306.884
    },
    {
      "id": "l474-c40-c76",
      "origem": "c40",
      "destino": "c76",
      "distância": 539.688
    },
    {
      "id": "l475-c65-c80",
      "origem": "c65",
      "destino": "c80",
      "distância": 124.441
    },
    {
      "id": "l476-c32-c77",
      "origem": "c32",
      "destino": "c77",
      "distância": 398.499
    },
    {
      "id": "l477-c5-c78",
      "origem": "c5",
      "destino": "c78",
      "distância": 40.242
    },
    {
      "id": "l478-c19-c79",
      "origem": "c19",
      "destino": "c79",
      "distância": 271.416
    },
    {
      "id": "l479-c8-c51",
      "origem": "c8",
      "destino": "c51",
      "distância": 540.61
    },
    {
      "id": "l480-c36-c47",
      "origem": "c36",
      "destino": "c47",
      "distância": 577.72
    },
    {
      "id": "l481-c9-c92",
      "origem": "c9",
      "destino": "c92",
      "distância": 164.646
    },
    {
      "id": "l482-c6-c91",
      "origem": "c6",
      "destino": "c91",
      "distância": 521.656
    },
    {
      "id": "l483-c36-c98",
      "origem": "c36",
      "destino": "c98",
      "distância": 354.635
    },
    {
      "id": "l484-c40-c56",
      "origem": "c40",
      "destino": "c56",
      "distância": 332.232
    },
    {
      "id": "l485-c23-c77",
      "origem": "c23",
      "destino": "c77",
      "distância": 376.194
    },
    {
      "id": "l486-c37-c40",
      "origem": "c37",
      "destino": "c40",
      "distância": 118.632
    },
    {
      "id": "l487-c47-c69",
      "origem": "c47",
      "destino": "c69",
      "distância": 182.175
    },
    {
      "id": "l488-c69-c79",
      "origem": "c69",
      "destino": "c79",
      "distância": 135.412
    },
    {
      "id": "l489-c9-c78",
      "origem": "c9",
      "destino": "c78",
      "distância": 593.977
    },
    {
      "id": "l490-c48-c96",
      "origem": "c48",
      "destino": "c96",
      "distância": 580.133
    },
    {
      "id": "l491-c24-c28",
      "origem": "c24",
      "destino": "c28",
      "distância": 300.828
    },
    {
      "id": "l492-c13-c57",
      "origem": "c13",
      "destino": "c57",
      "distância": 455.942
    },
    {
      "id": "l493-c23-c42",
      "origem": "c23",
      "destino": "c42",
      "distância": 515.891
    },
    {
      "id": "l494-c60-c80",
      "origem": "c60",
      "destino": "c80",
      "distância": 513.049
    },
    {
      "id": "l495-c32-c49",
      "origem": "c32",
      "destino": "c49",
      "distância": 470.134
    },
    {
      "id": "l496-c25-c82",
      "origem": "c25",
      "destino": "c82",
      "distância": 551.357
    },
    {
      "id": "l497-c5-c68",
      "origem": "c5",
      "destino": "c68",
      "distância": 307.105
    },
    {
      "id": "l498-c11-c31",
      "origem": "c11",
      "destino": "c31",
      "distância": 168.305
    },
    {
      "id": "l499-c44-c48",
      "origem": "c44",
      "destino": "c48",
      "distância": 582.429
    },
    {
      "id": "l500-c49-c95",
      "origem": "c49",
      "destino": "c95",
      "distância": 384.24
    },
    {
      "id": "l501-c14-c70",
      "origem": "c14",
      "destino": "c70",
      "distância": 246.785
    },
    {
      "id": "l502-c16-c88",
      "origem": "c16",
      "destino": "c88",
      "distância": 317.869
    },
    {
      "id": "l503-c3-c21",
      "origem": "c3",
      "destino": "c21",
      "distância": 252.251
    },
    {
      "id": "l504-c6-c11",
      "origem": "c6",
      "destino": "c11",
      "distância": 6.023
    },
    {
      "id": "l505-c40-c51",
      "origem": "c40",
      "destino": "c51",
      "distância": 503.189
    },
    {
      "id": "l506-c36-c39",
      "origem": "c36",
      "destino": "c39",
      "distância": 51.162
    },
    {
      "id": "l507-c4-c51",
      "origem": "c4",
      "destino": "c51",
      "distância": 555.379
    },
    {
      "id": "l508-c57-c98",
      "origem": "c57",
      "destino": "c98",
      "distância": 190.488
    },
    {
      "id": "l509-c30-c78",
      "origem": "c30",
      "destino": "c78",
      "distância": 591.056
    },
    {
      "id": "l510-c35-c77",
      "origem": "c35",
      "destino": "c77",
      "distância": 299.454
    },
    {
      "id": "l511-c17-c69",
      "origem": "c17",
      "destino": "c69",
      "distância": 566.792
    },
    {
      "id": "l512-c9-c81",
      "origem": "c9",
      "destino": "c81",
      "distância": 240.481
    },
    {
      "id": "l513-c1-c95",
      "origem": "c1",
      "destino": "c95",
      "distância": 38.873
    },
    {
      "id": "l514-c46-c72",
      "origem": "c46",
      "destino": "c72",
      "distância": 371.654
    },
    {
      "id": "l515-c31-c51",
      "origem": "c31",
      "destino": "c51",
      "distância": 116.614
    },
    {
      "id": "l516-c26-c100",
      "origem": "c26",
      "destino": "c100",
      "distância": 47.606
    },
    {
      "id": "l517-c59-c66",
      "origem": "c59",
      "destino": "c66",
      "distância": 362.437
    },
    {
      "id": "l518-c40-c87",
      "origem": "c40",
      "destino": "c87",
      "distância": 448.403
    },
    {
      "id": "l519-c83-c98",
      "origem": "c83",
      "destino": "c98",
      "distância": 132.379
    },
    {
      "id": "l520-c21-c38",
      "origem": "c21",
      "destino": "c38",
      "distância": 480.972
    },
    {
      "id": "l521-c23-c73",
      "origem": "c23",
      "destino": "c73",
      "distância": 443.358
    },
    {
      "id": "l522-c14-c21",
      "origem": "c14",
      "destino": "c21",
      "distância": 561.152
    },
    {
      "id": "l523-c3-c7",
      "origem": "c3",
      "destino": "c7",
      "distância": 404.007
    },
    {
      "id": "l524-c4-c43",
      "origem": "c4",
      "destino": "c43",
      "distância": 407.533
    },
    {
      "id": "l525-c32-c81",
      "origem": "c32",
      "destino": "c81",
      "distância": 170.889
    },
    {
      "id": "l526-c19-c37",
      "origem": "c19",
      "destino": "c37",
      "distância": 241.687
    },
    {
      "id": "l527-c47-c79",
      "origem": "c47",
      "destino": "c79",
      "distância": 9.565
    },
    {
      "id": "l528-c25-c33",
      "origem": "c25",
      "destino": "c33",
      "distância": 159.556
    },
    {
      "id": "l529-c16-c100",
      "origem": "c16",
      "destino": "c100",
      "distância": 318.435
    },
    {
      "id": "l530-c14-c28",
      "origem": "c14",
      "destino": "c28",
      "distância": 132.837
    },
    {
      "id": "l531-c38-c58",
      "origem": "c38",
      "destino": "c58",
      "distância": 194.003
    },
    {
      "id": "l532-c11-c69",
      "origem": "c11",
      "destino": "c69",
      "distância": 579.368
    },
    {
      "id": "l533-c8-c94",
      "origem": "c8",
      "destino": "c94",
      "distância": 172.356
    },
    {
      "id": "l534-c28-c61",
      "origem": "c28",
      "destino": "c61",
      "distância": 273.359
    },
    {
      "id": "l535-c19-c63",
      "origem": "c19",
      "destino": "c63",
      "distância": 575.884
    },
    {
      "id": "l536-c28-c69",
      "origem": "c28",
      "destino": "c69",
      "distância": 382.753
    },
    {
      "id": "l537-c42-c93",
      "origem": "c42",
      "destino": "c93",
      "distância": 406.084
    },
    {
      "id": "l538-c31-c59",
      "origem": "c31",
      "destino": "c59",
      "distância": 161.149
    },
    {
      "id": "l539-c58-c80",
      "origem": "c58",
      "destino": "c80",
      "distância": 475.492
    },
    {
      "id": "l540-c11-c85",
      "origem": "c11",
      "destino": "c85",
      "distância": 323.309
    },
    {
      "id": "l541-c66-c70",
      "origem": "c66",
      "destino": "c70",
      "distância": 197.153
    },
    {
      "id": "l542-c40-c93",
      "origem": "c40",
      "destino": "c93",
      "distância": 521.375
    },
    {
      "id": "l543-c5-c14",
      "origem": "c5",
      "destino": "c14",
      "distância": 562.37
    },
    {
      "id": "l544-c40-c100",
      "origem": "c40",
      "destino": "c100",
      "distância": 482.451
    },
    {
      "id": "l545-c8-c57",
      "origem": "c8",
      "destino": "c57",
      "distância": 209.677
    },
    {
      "id": "l546-c62-c88",
      "origem": "c62",
      "destino": "c88",
      "distância": 44.651
    },
    {
      "id": "l547-c74-c81",
      "origem": "c74",
      "destino": "c81",
      "distância": 486.713
    },
    {
      "id": "l548-c46-c95",
      "origem": "c46",
      "destino": "c95",
      "distância": 559.58
    },
    {
      "id": "l549-c20-c59",
      "origem": "c20",
      "destino": "c59",
      "distância": 67.739
    },
    {
      "id": "l550-c49-c52",
      "origem": "c49",
      "destino": "c52",
      "distância": 352.853
    },
    {
      "id": "l551-c3-c91",
      "origem": "c3",
      "destino": "c91",
      "distância": 289.742
    },
    {
      "id": "l552-c50-c90",
      "origem": "c50",
      "destino": "c90",
      "distância": 586.114
    },
    {
      "id": "l553-c55-c62",
      "origem": "c55",
      "destino": "c62",
      "distância": 116.682
    },
    {
      "id": "l554-c70-c84",
      "origem": "c70",
      "destino": "c84",
      "distância": 493.379
    },
    {
      "id": "l555-c19-c20",
      "origem": "c19",
      "destino": "c20",
      "distância": 470.393
    },
    {
      "id": "l556-c4-c28",
      "origem": "c4",
      "destino": "c28",
      "distância": 155.203
    },
    {
      "id": "l557-c38-c91",
      "origem": "c38",
      "destino": "c91",
      "distância": 344.406
    },
    {
      "id": "l558-c33-c81",
      "origem": "c33",
      "destino": "c81",
      "distância": 431.779
    },
    {
      "id": "l559-c6-c8",
      "origem": "c6",
      "destino": "c8",
      "distância": 139.098
    },
    {
      "id": "l560-c41-c72",
      "origem": "c41",
      "destino": "c72",
      "distância": 29.923
    },
    {
      "id": "l561-c10-c81",
      "origem": "c10",
      "destino": "c81",
      "distância": 154.92
    },
    {
      "id": "l562-c57-c97",
      "origem": "c57",
      "destino": "c97",
      "distância": 178.063
    },
    {
      "id": "l563-c51-c97",
      "origem": "c51",
      "destino": "c97",
      "distância": 205.549
    },
    {
      "id": "l564-c50-c75",
      "origem": "c50",
      "destino": "c75",
      "distância": 479.557
    },
    {
      "id": "l565-c19-c70",
      "origem": "c19",
      "destino": "c70",
      "distância": 107.672
    },
    {
      "id": "l566-c63-c74",
      "origem": "c63",
      "destino": "c74",
      "distância": 138.11
    },
    {
      "id": "l567-c17-c98",
      "origem": "c17",
      "destino": "c98",
      "distância": 484.388
    },
    {
      "id": "l568-c11-c95",
      "origem": "c11",
      "destino": "c95",
      "distância": 527.547
    },
    {
      "id": "l569-c11-c96",
      "origem": "c11",
      "destino": "c96",
      "distância": 467.728
    },
    {
      "id": "l570-c90-c92",
      "origem": "c90",
      "destino": "c92",
      "distância": 271.521
    },
    {
      "id": "l571-c32-c58",
      "origem": "c32",
      "destino": "c58",
      "distância": 39.018
    },
    {
      "id": "l572-c1-c84",
      "origem": "c1",
      "destino": "c84",
      "distância": 577.487
    },
    {
      "id": "l573-c24-c56",
      "origem": "c24",
      "destino": "c56",
      "distância": 312.438
    },
    {
      "id": "l574-c15-c40",
      "origem": "c15",
      "destino": "c40",
      "distância": 444.928
    },
    {
      "id": "l575-c23-c97",
      "origem": "c23",
      "destino": "c97",
      "distância": 205.064
    },
    {
      "id": "l576-c34-c84",
      "origem": "c34",
      "destino": "c84",
      "distância": 407.878
    },
    {
      "id": "l577-c16-c75",
      "origem": "c16",
      "destino": "c75",
      "distância": 297.832
    },
    {
      "id": "l578-c36-c46",
      "origem": "c36",
      "destino": "c46",
      "distância": 503.427
    },
    {
      "id": "l579-c23-c36",
      "origem": "c23",
      "destino": "c36",
      "distância": 230.595
    },
    {
      "id": "l580-c25-c52",
      "origem": "c25",
      "destino": "c52",
      "distância": 56.066
    },
    {
      "id": "l581-c24-c49",
      "origem": "c24",
      "destino": "c49",
      "distância": 253.013
    },
    {
      "id": "l582-c8-c20",
      "origem": "c8",
      "destino": "c20",
      "distância": 419.48
    },
    {
      "id": "l583-c23-c39",
      "origem": "c23",
      "destino": "c39",
      "distância": 18.242
    },
    {
      "id": "l584-c2-c52",
      "origem": "c2",
      "destino": "c52",
      "distância": 597.225
    },
    {
      "id": "l585-c45-c79",
      "origem": "c45",
      "destino": "c79",
      "distância": 215.758
    },
    {
      "id": "l586-c28-c92",
      "origem": "c28",
      "destino": "c92",
      "distância": 85.722
    },
    {
      "id": "l587-c33-c38",
      "origem": "c33",
      "destino": "c38",
      "distância": 358.621
    },
    {
      "id": "l588-c2-c11",
      "origem": "c2",
      "destino": "c11",
      "distância": 532.868
    },
    {
      "id": "l589-c58-c76",
      "origem": "c58",
      "destino": "c76",
      "distância": 32.852
    },
    {
      "id": "l590-c40-c82",
      "origem": "c40",
      "destino": "c82",
      "distância": 382.638
    },
    {
      "id": "l591-c28-c97",
      "origem": "c28",
      "destino": "c97",
      "distância": 277.318
    },
    {
      "id": "l592-c32-c72",
      "origem": "c32",
      "destino": "c72",
      "distância": 435.302
    },
    {
      "id": "l593-c88-c97",
      "origem": "c88",
      "destino": "c97",
      "distância": 582.8
    },
    {
      "id": "l594-c27-c54",
      "origem": "c27",
      "destino": "c54",
      "distância": 471.581
    },
    {
      "id": "l595-c16-c92",
      "origem": "c16",
      "destino": "c92",
      "distância": 174.367
    },
    {
      "id": "l596-c61-c69",
      "origem": "c61",
      "destino": "c69",
      "distância": 155.038
    },
    {
      "id": "l597-c3-c44",
      "origem": "c3",
      "destino": "c44",
      "distância": 236.549
    },
    {
      "id": "l598-c42-c54",
      "origem": "c42",
      "destino": "c54",
      "distância": 308.173
    },
    {
      "id": "l599-c6-c51",
      "origem": "c6",
      "destino": "c51",
      "distância": 177.451
    },
    {
      "id": "l600-c37-c99",
      "origem": "c37",
      "destino": "c99",
      "distância": 582.24
    },
    {
      "id": "l601-c1-c34",
      "origem": "c1",
      "destino": "c34",
      "distância": 17.034
    },
    {
      "id": "l602-c31-c32",
      "origem": "c31",
      "destino": "c32",
      "distância": 402.884
    },
    {
      "id": "l603-c32-c65",
      "origem": "c32",
      "destino": "c65",
      "distância": 331.659
    },
    {
      "id": "l604-c17-c47",
      "origem": "c17",
      "destino": "c47",
      "distância": 58.375
    },
    {
      "id": "l605-c2-c51",
      "origem": "c2",
      "destino": "c51",
      "distância": 483.163
    },
    {
      "id": "l606-c18-c72",
      "origem": "c18",
      "destino": "c72",
      "distância": 358.03
    },
    {
      "id": "l607-c21-c93",
      "origem": "c21",
      "destino": "c93",
      "distância": 467.767
    },
    {
      "id": "l608-c19-c51",
      "origem": "c19",
      "destino": "c51",
      "distância": 595.06
    },
    {
      "id": "l609-c47-c78",
      "origem": "c47",
      "destino": "c78",
      "distância": 488.603
    },
    {
      "id": "l610-c24-c31",
      "origem": "c24",
      "destino": "c31",
      "distância": 443.095
    },
    {
      "id": "l611-c24-c42",
      "origem": "c24",
      "destino": "c42",
      "distância": 56.742
    },
    {
      "id": "l612-c8-c22",
      "origem": "c8",
      "destino": "c22",
      "distância": 13.281
    },
    {
      "id": "l613-c15-c97",
      "origem": "c15",
      "destino": "c97",
      "distância": 37.787
    },
    {
      "id": "l614-c45-c62",
      "origem": "c45",
      "destino": "c62",
      "distância": 272.867
    },
    {
      "id": "l615-c53-c89",
      "origem": "c53",
      "destino": "c89",
      "distância": 431.199
    },
    {
      "id": "l616-c20-c69",
      "origem": "c20",
      "destino": "c69",
      "distância": 135.836
    },
    {
      "id": "l617-c13-c29",
      "origem": "c13",
      "destino": "c29",
      "distância": 52.985
    },
    {
      "id": "l618-c45-c92",
      "origem": "c45",
      "destino": "c92",
      "distância": 263.007
    },
    {
      "id": "l619-c24-c35",
      "origem": "c24",
      "destino": "c35",
      "distância": 574.725
    },
    {
      "id": "l620-c76-c82",
      "origem": "c76",
      "destino": "c82",
      "distância": 142.285
    },
    {
      "id": "l621-c48-c90",
      "origem": "c48",
      "destino": "c90",
      "distância": 389.616
    },
    {
      "id": "l622-c18-c42",
      "origem": "c18",
      "destino": "c42",
      "distância": 593.544
    },
    {
      "id": "l623-c20-c33",
      "origem": "c20",
      "destino": "c33",
      "distância": 442.475
    },
    {
      "id": "l624-c4-c72",
      "origem": "c4",
      "destino": "c72",
      "distância": 302.917
    },
    {
      "id": "l625-c50-c65",
      "origem": "c50",
      "destino": "c65",
      "distância": 312.04
    },
    {
      "id": "l626-c1-c88",
      "origem": "c1",
      "destino": "c88",
      "distância": 560.539
    },
    {
      "id": "l627-c17-c43",
      "origem": "c17",
      "destino": "c43",
      "distância": 66.586
    },
    {
      "id": "l628-c6-c81",
      "origem": "c6",
      "destino": "c81",
      "distância": 292.772
    },
    {
      "id": "l629-c2-c91",
      "origem": "c2",
      "destino": "c91",
      "distância": 468.541
    },
    {
      "id": "l630-c32-c35",
      "origem": "c32",
      "destino": "c35",
      "distância": 449.464
    },
    {
      "id": "l631-c49-c51",
      "origem": "c49",
      "destino": "c51",
      "distância": 10.831
    },
    {
      "id": "l632-c34-c39",
      "origem": "c34",
      "destino": "c39",
      "distância": 383.679
    },
    {
      "id": "l633-c40-c53",
      "origem": "c40",
      "destino": "c53",
      "distância": 460.434
    },
    {
      "id": "l634-c10-c37",
      "origem": "c10",
      "destino": "c37",
      "distância": 54.704
    },
    {
      "id": "l635-c62-c98",
      "origem": "c62",
      "destino": "c98",
      "distância": 243.13
    },
    {
      "id": "l636-c33-c50",
      "origem": "c33",
      "destino": "c50",
      "distância": 247.403
    },
    {
      "id": "l637-c16-c52",
      "origem": "c16",
      "destino": "c52",
      "distância": 581.309
    },
    {
      "id": "l638-c24-c66",
      "origem": "c24",
      "destino": "c66",
      "distância": 323.642
    },
    {
      "id": "l639-c7-c50",
      "origem": "c7",
      "destino": "c50",
      "distância": 299.899
    },
    {
      "id": "l640-c7-c33",
      "origem": "c7",
      "destino": "c33",
      "distância": 397.206
    },
    {
      "id": "l641-c61-c86",
      "origem": "c61",
      "destino": "c86",
      "distância": 95.992
    },
    {
      "id": "l642-c4-c38",
      "origem": "c4",
      "destino": "c38",
      "distância": 384.744
    },
    {
      "id": "l643-c10-c21",
      "origem": "c10",
      "destino": "c21",
      "distância": 538.016
    },
    {
      "id": "l644-c50-c61",
      "origem": "c50",
      "destino": "c61",
      "distância": 559.392
    },
    {
      "id": "l645-c46-c97",
      "origem": "c46",
      "destino": "c97",
      "distância": 436.339
    },
    {
      "id": "l646-c17-c78",
      "origem": "c17",
      "destino": "c78",
      "distância": 594.318
    },
    {
      "id": "l647-c56-c90",
      "origem": "c56",
      "destino": "c90",
      "distância": 91.414
    },
    {
      "id": "l648-c5-c61",
      "origem": "c5",
      "destino": "c61",
      "distância": 112.695
    },
    {
      "id": "l649-c4-c84",
      "origem": "c4",
      "destino": "c84",
      "distância": 120.419
    },
    {
      "id": "l650-c9-c80",
      "origem": "c9",
      "destino": "c80",
      "distância": 398.163
    },
    {
      "id": "l651-c13-c51",
      "origem": "c13",
      "destino": "c51",
      "distância": 84.647
    },
    {
      "id": "l652-c71-c97",
      "origem": "c71",
      "destino": "c97",
      "distância": 227.493
    },
    {
      "id": "l653-c24-c96",
      "origem": "c24",
      "destino": "c96",
      "distância": 214.027
    },
    {
      "id": "l654-c46-c96",
      "origem": "c46",
      "destino": "c96",
      "distância": 561.447
    },
    {
      "id": "l655-c8-c74",
      "origem": "c8",
      "destino": "c74",
      "distância": 379.647
    },
    {
      "id": "l656-c18-c86",
      "origem": "c18",
      "destino": "c86",
      "distância": 126.106
    },
    {
      "id": "l657-c62-c77",
      "origem": "c62",
      "destino": "c77",
      "distância": 302.714
    },
    {
      "id": "l658-c22-c84",
      "origem": "c22",
      "destino": "c84",
      "distância": 222.662
    },
    {
      "id": "l659-c12-c19",
      "origem": "c12",
      "destino": "c19",
      "distância": 216.373
    },
    {
      "id": "l660-c39-c74",
      "origem": "c39",
      "destino": "c74",
      "distância": 291.872
    },
    {
      "id": "l661-c41-c100",
      "origem": "c41",
      "destino": "c100",
      "distância": 549.774
    },
    {
      "id": "l662-c66-c75",
      "origem": "c66",
      "destino": "c75",
      "distância": 401.674
    },
    {
      "id": "l663-c13-c23",
      "origem": "c13",
      "destino": "c23",
      "distância": 264.366
    },
    {
      "id": "l664-c54-c98",
      "origem": "c54",
      "destino": "c98",
      "distância": 188.559
    },
    {
      "id": "l665-c13-c95",
      "origem": "c13",
      "destino": "c95",
      "distância": 468.065
    },
    {
      "id": "l666-c45-c73",
      "origem": "c45",
      "destino": "c73",
      "distância": 519.413
    },
    {
      "id": "l667-c20-c30",
      "origem": "c20",
      "destino": "c30",
      "distância": 227.045
    },
    {
      "id": "l668-c28-c39",
      "origem": "c28",
      "destino": "c39",
      "distância": 114.556
    },
    {
      "id": "l669-c56-c98",
      "origem": "c56",
      "destino": "c98",
      "distância": 575.254
    },
    {
      "id": "l670-c3-c9",
      "origem": "c3",
      "destino": "c9",
      "distância": 388.601
    },
    {
      "id": "l671-c32-c59",
      "origem": "c32",
      "destino": "c59",
      "distância": 467.07
    },
    {
      "id": "l672-c32-c47",
      "origem": "c32",
      "destino": "c47",
      "distância": 447.666
    },
    {
      "id": "l673-c2-c84",
      "origem": "c2",
      "destino": "c84",
      "distância": 328.359
    },
    {
      "id": "l674-c19-c97",
      "origem": "c19",
      "destino": "c97",
      "distância": 286.374
    },
    {
      "id": "l675-c52-c82",
      "origem": "c52",
      "destino": "c82",
      "distância": 417.716
    },
    {
      "id": "l676-c19-c82",
      "origem": "c19",
      "destino": "c82",
      "distância": 285.35
    },
    {
      "id": "l677-c59-c61",
      "origem": "c59",
      "destino": "c61",
      "distância": 461.182
    },
    {
      "id": "l678-c8-c41",
      "origem": "c8",
      "destino": "c41",
      "distância": 86.156
    },
    {
      "id": "l679-c62-c91",
      "origem": "c62",
      "destino": "c91",
      "distância": 499.436
    },
    {
      "id": "l680-c3-c90",
      "origem": "c3",
      "destino": "c90",
      "distância": 175.419
    },
    {
      "id": "l681-c40-c48",
      "origem": "c40",
      "destino": "c48",
      "distância": 458.701
    },
    {
      "id": "l682-c41-c85",
      "origem": "c41",
      "destino": "c85",
      "distância": 50.758
    },
    {
      "id": "l683-c83-c89",
      "origem": "c83",
      "destino": "c89",
      "distância": 180.871
    },
    {
      "id": "l684-c55-c67",
      "origem": "c55",
      "destino": "c67",
      "distância": 90.397
    },
    {
      "id": "l685-c12-c41",
      "origem": "c12",
      "destino": "c41",
      "distância": 510.811
    },
    {
      "id": "l686-c41-c69",
      "origem": "c41",
      "destino": "c69",
      "distância": 517.912
    },
    {
      "id": "l687-c16-c71",
      "origem": "c16",
      "destino": "c71",
      "distância": 376.44
    },
    {
      "id": "l688-c48-c73",
      "origem": "c48",
      "destino": "c73",
      "distância": 262.238
    },
    {
      "id": "l689-c8-c46",
      "origem": "c8",
      "destino": "c46",
      "distância": 419.256
    },
    {
      "id": "l690-c4-c53",
      "origem": "c4",
      "destino": "c53",
      "distância": 363.497
    },
    {
      "id": "l691-c7-c74",
      "origem": "c7",
      "destino": "c74",
      "distância": 495.274
    },
    {
      "id": "l692-c49-c100",
      "origem": "c49",
      "destino": "c100",
      "distância": 261.5
    },
    {
      "id": "l693-c2-c89",
      "origem": "c2",
      "destino": "c89",
      "distância": 161.419
    },
    {
      "id": "l694-c10-c56",
      "origem": "c10",
      "destino": "c56",
      "distância": 535.314
    },
    {
      "id": "l695-c46-c94",
      "origem": "c46",
      "destino": "c94",
      "distância": 187.146
    },
    {
      "id": "l696-c86-c89",
      "origem": "c86",
      "destino": "c89",
      "distância": 430.251
    },
    {
      "id": "l697-c60-c72",
      "origem": "c60",
      "destino": "c72",
      "distância": 102.934
    },
    {
      "id": "l698-c36-c60",
      "origem": "c36",
      "destino": "c60",
      "distância": 460.554
    },
    {
      "id": "l699-c29-c59",
      "origem": "c29",
      "destino": "c59",
      "distância": 368.281
    },
    {
      "id": "l700-c26-c29",
      "origem": "c26",
      "destino": "c29",
      "distância": 456.97
    },
    {
      "id": "l701-c5-c91",
      "origem": "c5",
      "destino": "c91",
      "distância": 412.289
    },
    {
      "id": "l702-c29-c89",
      "origem": "c29",
      "destino": "c89",
      "distância": 566.662
    },
    {
      "id": "l703-c39-c53",
      "origem": "c39",
      "destino": "c53",
      "distância": 334.553
    },
    {
      "id": "l704-c46-c58",
      "origem": "c46",
      "destino": "c58",
      "distância": 462.174
    },
    {
      "id": "l705-c28-c57",
      "origem": "c28",
      "destino": "c57",
      "distância": 449.621
    },
    {
      "id": "l706-c20-c56",
      "origem": "c20",
      "destino": "c56",
      "distância": 576.941
    },
    {
      "id": "l707-c16-c21",
      "origem": "c16",
      "destino": "c21",
      "distância": 126.936
    },
    {
      "id": "l708-c23-c37",
      "origem": "c23",
      "destino": "c37",
      "distância": 129.153
    },
    {
      "id": "l709-c59-c62",
      "origem": "c59",
      "destino": "c62",
      "distância": 595.513
    },
    {
      "id": "l710-c39-c76",
      "origem": "c39",
      "destino": "c76",
      "distância": 234.102
    },
    {
      "id": "l711-c23-c62",
      "origem": "c23",
      "destino": "c62",
      "distância": 267.125
    },
    {
      "id": "l712-c31-c68",
      "origem": "c31",
      "destino": "c68",
      "distância": 523.252
    },
    {
      "id": "l713-c24-c52",
      "origem": "c24",
      "destino": "c52",
      "distância": 214.322
    },
    {
      "id": "l714-c3-c97",
      "origem": "c3",
      "destino": "c97",
      "distância": 296.616
    },
    {
      "id": "l715-c42-c69",
      "origem": "c42",
      "destino": "c69",
      "distância": 291.235
    },
    {
      "id": "l716-c2-c81",
      "origem": "c2",
      "destino": "c81",
      "distância": 59.046
    },
    {
      "id": "l717-c4-c31",
      "origem": "c4",
      "destino": "c31",
      "distância": 485.168
    },
    {
      "id": "l718-c70-c98",
      "origem": "c70",
      "destino": "c98",
      "distância": 504.335
    },
    {
      "id": "l719-c9-c10",
      "origem": "c9",
      "destino": "c10",
      "distância": 576.906
    },
    {
      "id": "l720-c11-c42",
      "origem": "c11",
      "destino": "c42",
      "distância": 12.639
    },
    {
      "id": "l721-c47-c76",
      "origem": "c47",
      "destino": "c76",
      "distância": 141.984
    },
    {
      "id": "l722-c11-c14",
      "origem": "c11",
      "destino": "c14",
      "distância": 503.608
    },
    {
      "id": "l723-c18-c100",
      "origem": "c18",
      "destino": "c100",
      "distância": 193.232
    },
    {
      "id": "l724-c45-c52",
      "origem": "c45",
      "destino": "c52",
      "distância": 236.758
    },
    {
      "id": "l725-c70-c86",
      "origem": "c70",
      "destino": "c86",
      "distância": 388.3
    },
    {
      "id": "l726-c9-c25",
      "origem": "c9",
      "destino": "c25",
      "distância": 353.633
    },
    {
      "id": "l727-c64-c90",
      "origem": "c64",
      "destino": "c90",
      "distância": 310.237
    },
    {
      "id": "l728-c51-c74",
      "origem": "c51",
      "destino": "c74",
      "distância": 263.173
    },
    {
      "id": "l729-c59-c67",
      "origem": "c59",
      "destino": "c67",
      "distância": 296.155
    },
    {
      "id": "l730-c17-c58",
      "origem": "c17",
      "destino": "c58",
      "distância": 143.906
    },
    {
      "id": "l731-c46-c62",
      "origem": "c46",
      "destino": "c62",
      "distância": 181.721
    },
    {
      "id": "l732-c50-c96",
      "origem": "c50",
      "destino": "c96",
      "distância": 197.081
    },
    {
      "id": "l733-c75-c94",
      "origem": "c75",
      "destino": "c94",
      "distância": 250.088
    },
    {
      "id": "l734-c14-c30",
      "origem": "c14",
      "destino": "c30",
      "distância": 301.621
    },
    {
      "id": "l735-c4-c14",
      "origem": "c4",
      "destino": "c14",
      "distância": 548.322
    },
    {
      "id": "l736-c10-c90",
      "origem": "c10",
      "destino": "c90",
      "distância": 308.16
    },
    {
      "id": "l737-c12-c99",
      "origem": "c12",
      "destino": "c99",
      "distância": 85.661
    },
    {
      "id": "l738-c25-c73",
      "origem": "c25",
      "destino": "c73",
      "distância": 471.596
    },
    {
      "id": "l739-c28-c76",
      "origem": "c28",
      "destino": "c76",
      "distância": 445.67
    },
    {
      "id": "l740-c8-c48",
      "origem": "c8",
      "destino": "c48",
      "distância": 73.776
    },
    {
      "id": "l741-c1-c68",
      "origem": "c1",
      "destino": "c68",
      "distância": 36.706
    },
    {
      "id": "l742-c54-c81",
      "origem": "c54",
      "destino": "c81",
      "distância": 259.001
    },
    {
      "id": "l743-c14-c67",
      "origem": "c14",
      "destino": "c67",
      "distância": 413.648
    },
    {
      "id": "l744-c1-c32",
      "origem": "c1",
      "destino": "c32",
      "distância": 296.977
    },
    {
      "id": "l745-c47-c81",
      "origem": "c47",
      "destino": "c81",
      "distância": 133.143
    },
    {
      "id": "l746-c29-c38",
      "origem": "c29",
      "destino": "c38",
      "distância": 281.906
    },
    {
      "id": "l747-c5-c48",
      "origem": "c5",
      "destino": "c48",
      "distância": 552.456
    },
    {
      "id": "l748-c82-c86",
      "origem": "c82",
      "destino": "c86",
      "distância": 488.543
    },
    {
      "id": "l749-c7-c34",
      "origem": "c7",
      "destino": "c34",
      "distância": 247.546
    },
    {
      "id": "l750-c88-c99",
      "origem": "c88",
      "destino": "c99",
      "distância": 199.265
    },
    {
      "id": "l751-c10-c43",
      "origem": "c10",
      "destino": "c43",
      "distância": 52.155
    },
    {
      "id": "l752-c29-c62",
      "origem": "c29",
      "destino": "c62",
      "distância": 53.484
    },
    {
      "id": "l753-c48-c79",
      "origem": "c48",
      "destino": "c79",
      "distância": 459.444
    },
    {
      "id": "l754-c43-c55",
      "origem": "c43",
      "destino": "c55",
      "distância": 572.912
    },
    {
      "id": "l755-c1-c20",
      "origem": "c1",
      "destino": "c20",
      "distância": 360.653
    },
    {
      "id": "l756-c27-c51",
      "origem": "c27",
      "destino": "c51",
      "distância": 523.176
    },
    {
      "id": "l757-c63-c78",
      "origem": "c63",
      "destino": "c78",
      "distância": 507.25
    },
    {
      "id": "l758-c31-c94",
      "origem": "c31",
      "destino": "c94",
      "distância": 125.771
    },
    {
      "id": "l759-c36-c48",
      "origem": "c36",
      "destino": "c48",
      "distância": 16.922
    },
    {
      "id": "l760-c37-c83",
      "origem": "c37",
      "destino": "c83",
      "distância": 14.963
    },
    {
      "id": "l761-c72-c80",
      "origem": "c72",
      "destino": "c80",
      "distância": 319.103
    },
    {
      "id": "l762-c18-c33",
      "origem": "c18",
      "destino": "c33",
      "distância": 435.749
    },
    {
      "id": "l763-c19-c28",
      "origem": "c19",
      "destino": "c28",
      "distância": 487.568
    },
    {
      "id": "l764-c36-c86",
      "origem": "c36",
      "destino": "c86",
      "distância": 55.78
    },
    {
      "id": "l765-c6-c23",
      "origem": "c6",
      "destino": "c23",
      "distância": 539.145
    },
    {
      "id": "l766-c34-c85",
      "origem": "c34",
      "destino": "c85",
      "distância": 122.432
    },
    {
      "id": "l767-c4-c85",
      "origem": "c4",
      "destino": "c85",
      "distância": 524.392
    },
    {
      "id": "l768-c18-c41",
      "origem": "c18",
      "destino": "c41",
      "distância": 516.839
    },
    {
      "id": "l769-c18-c23",
      "origem": "c18",
      "destino": "c23",
      "distância": 463.459
    },
    {
      "id": "l770-c18-c55",
      "origem": "c18",
      "destino": "c55",
      "distância": 587.258
    },
    {
      "id": "l771-c1-c7",
      "origem": "c1",
      "destino": "c7",
      "distância": 217.926
    },
    {
      "id": "l772-c55-c59",
      "origem": "c55",
      "destino": "c59",
      "distância": 459.946
    },
    {
      "id": "l773-c34-c45",
      "origem": "c34",
      "destino": "c45",
      "distância": 277.02
    },
    {
      "id": "l774-c53-c59",
      "origem": "c53",
      "destino": "c59",
      "distância": 134.056
    },
    {
      "id": "l775-c42-c66",
      "origem": "c42",
      "destino": "c66",
      "distância": 339.936
    },
    {
      "id": "l776-c26-c46",
      "origem": "c26",
      "destino": "c46",
      "distância": 282.782
    },
    {
      "id": "l777-c15-c92",
      "origem": "c15",
      "destino": "c92",
      "distância": 472.73
    },
    {
      "id": "l778-c15-c71",
      "origem": "c15",
      "destino": "c71",
      "distância": 517.586
    },
    {
      "id": "l779-c60-c96",
      "origem": "c60",
      "destino": "c96",
      "distância": 486.891
    },
    {
      "id": "l780-c3-c51",
      "origem": "c3",
      "destino": "c51",
      "distância": 206.645
    },
    {
      "id": "l781-c17-c21",
      "origem": "c17",
      "destino": "c21",
      "distância": 8.263
    },
    {
      "id": "l782-c2-c25",
      "origem": "c2",
      "destino": "c25",
      "distância": 303.04
    },
    {
      "id": "l783-c34-c54",
      "origem": "c34",
      "destino": "c54",
      "distância": 575.796
    },
    {
      "id": "l784-c41-c46",
      "origem": "c41",
      "destino": "c46",
      "distância": 270.949
    },
    {
      "id": "l785-c43-c94",
      "origem": "c43",
      "destino": "c94",
      "distância": 562.995
    },
    {
      "id": "l786-c47-c57",
      "origem": "c47",
      "destino": "c57",
      "distância": 127.511
    },
    {
      "id": "l787-c4-c64",
      "origem": "c4",
      "destino": "c64",
      "distância": 101.839
    },
    {
      "id": "l788-c9-c39",
      "origem": "c9",
      "destino": "c39",
      "distância": 533.015
    },
    {
      "id": "l789-c57-c95",
      "origem": "c57",
      "destino": "c95",
      "distância": 592.933
    },
    {
      "id": "l790-c7-c91",
      "origem": "c7",
      "destino": "c91",
      "distância": 167.059
    },
    {
      "id": "l791-c2-c18",
      "origem": "c2",
      "destino": "c18",
      "distância": 565.504
    },
    {
      "id": "l792-c69-c83",
      "origem": "c69",
      "destino": "c83",
      "distância": 408.905
    },
    {
      "id": "l793-c10-c76",
      "origem": "c10",
      "destino": "c76",
      "distância": 37.639
    },
    {
      "id": "l794-c68-c69",
      "origem": "c68",
      "destino": "c69",
      "distância": 37.618
    },
    {
      "id": "l795-c19-c55",
      "origem": "c19",
      "destino": "c55",
      "distância": 537.012
    },
    {
      "id": "l796-c18-c52",
      "origem": "c18",
      "destino": "c52",
      "distância": 597.425
    },
    {
      "id": "l797-c36-c93",
      "origem": "c36",
      "destino": "c93",
      "distância": 486.339
    },
    {
      "id": "l798-c12-c16",
      "origem": "c12",
      "destino": "c16",
      "distância": 472.002
    },
    {
      "id": "l799-c15-c23",
      "origem": "c15",
      "destino": "c23",
      "distância": 339.871
    },
    {
      "id": "l800-c30-c63",
      "origem": "c30",
      "destino": "c63",
      "distância": 554.824
    },
    {
      "id": "l801-c45-c69",
      "origem": "c45",
      "destino": "c69",
      "distância": 176.316
    },
    {
      "id": "l802-c29-c99",
      "origem": "c29",
      "destino": "c99",
      "distância": 110.419
    },
    {
      "id": "l803-c1-c98",
      "origem": "c1",
      "destino": "c98",
      "distância": 118.402
    },
    {
      "id": "l804-c3-c94",
      "origem": "c3",
      "destino": "c94",
      "distância": 243.56
    },
    {
      "id": "l805-c26-c84",
      "origem": "c26",
      "destino": "c84",
      "distância": 96.256
    },
    {
      "id": "l806-c20-c81",
      "origem": "c20",
      "destino": "c81",
      "distância": 89.757
    },
    {
      "id": "l807-c13-c39",
      "origem": "c13",
      "destino": "c39",
      "distância": 573.131
    },
    {
      "id": "l808-c7-c73",
      "origem": "c7",
      "destino": "c73",
      "distância": 351.017
    },
    {
      "id": "l809-c83-c86",
      "origem": "c83",
      "destino": "c86",
      "distância": 499.629
    },
    {
      "id": "l810-c43-c89",
      "origem": "c43",
      "destino": "c89",
      "distância": 461.457
    },
    {
      "id": "l811-c26-c27",
      "origem": "c26",
      "destino": "c27",
      "distância": 293.619
    },
    {
      "id": "l812-c22-c43",
      "origem": "c22",
      "destino": "c43",
      "distância": 578.965
    },
    {
      "id": "l813-c64-c75",
      "origem": "c64",
      "destino": "c75",
      "distância": 175.751
    },
    {
      "id": "l814-c77-c96",
      "origem": "c77",
      "destino": "c96",
      "distância": 458.369
    },
    {
      "id": "l815-c20-c21",
      "origem": "c20",
      "destino": "c21",
      "distância": 50.404
    },
    {
      "id": "l816-c52-c92",
      "origem": "c52",
      "destino": "c92",
      "distância": 98.284
    },
    {
      "id": "l817-c22-c50",
      "origem": "c22",
      "destino": "c50",
      "distância": 203.612
    },
    {
      "id": "l818-c20-c77",
      "origem": "c20",
      "destino": "c77",
      "distância": 415.379
    },
    {
      "id": "l819-c22-c62",
      "origem": "c22",
      "destino": "c62",
      "distância": 565.466
    },
    {
      "id": "l820-c12-c86",
      "origem": "c12",
      "destino": "c86",
      "distância": 195.895
    },
    {
      "id": "l821-c22-c46",
      "origem": "c22",
      "destino": "c46",
      "distância": 105.177
    },
    {
      "id": "l822-c11-c72",
      "origem": "c11",
      "destino": "c72",
      "distância": 338.552
    },
    {
      "id": "l823-c54-c82",
      "origem": "c54",
      "destino": "c82",
      "distância": 382.819
    },
    {
      "id": "l824-c6-c14",
      "origem": "c6",
      "destino": "c14",
      "distância": 428.099
    },
    {
      "id": "l825-c79-c95",
      "origem": "c79",
      "destino": "c95",
      "distância": 394.755
    },
    {
      "id": "l826-c22-c49",
      "origem": "c22",
      "destino": "c49",
      "distância": 598.574
    },
    {
      "id": "l827-c41-c43",
      "origem": "c41",
      "destino": "c43",
      "distância": 489.902
    },
    {
      "id": "l828-c4-c9",
      "origem": "c4",
      "destino": "c9",
      "distância": 18.287
    },
    {
      "id": "l829-c29-c48",
      "origem": "c29",
      "destino": "c48",
      "distância": 476.908
    },
    {
      "id": "l830-c1-c53",
      "origem": "c1",
      "destino": "c53",
      "distância": 130.136
    },
    {
      "id": "l831-c27-c28",
      "origem": "c27",
      "destino": "c28",
      "distância": 358.773
    },
    {
      "id": "l832-c49-c55",
      "origem": "c49",
      "destino": "c55",
      "distância": 65.131
    },
    {
      "id": "l833-c9-c31",
      "origem": "c9",
      "destino": "c31",
      "distância": 48.16
    },
    {
      "id": "l834-c57-c86",
      "origem": "c57",
      "destino": "c86",
      "distância": 143.577
    },
    {
      "id": "l835-c76-c89",
      "origem": "c76",
      "destino": "c89",
      "distância": 141.373
    },
    {
      "id": "l836-c23-c46",
      "origem": "c23",
      "destino": "c46",
      "distância": 291.616
    },
    {
      "id": "l837-c54-c62",
      "origem": "c54",
      "destino": "c62",
      "distância": 380.729
    },
    {
      "id": "l838-c80-c86",
      "origem": "c80",
      "destino": "c86",
      "distância": 167.421
    },
    {
      "id": "l839-c9-c43",
      "origem": "c9",
      "destino": "c43",
      "distância": 301.826
    },
    {
      "id": "l840-c13-c50",
      "origem": "c13",
      "destino": "c50",
      "distância": 178.196
    },
    {
      "id": "l841-c28-c88",
      "origem": "c28",
      "destino": "c88",
      "distância": 390.233
    },
    {
      "id": "l842-c9-c88",
      "origem": "c9",
      "destino": "c88",
      "distância": 67.445
    },
    {
      "id": "l843-c34-c73",
      "origem": "c34",
      "destino": "c73",
      "distância": 177.458
    },
    {
      "id": "l844-c14-c15",
      "origem": "c14",
      "destino": "c15",
      "distância": 363.129
    },
    {
      "id": "l845-c27-c94",
      "origem": "c27",
      "destino": "c94",
      "distância": 537.598
    },
    {
      "id": "l846-c25-c54",
      "origem": "c25",
      "destino": "c54",
      "distância": 95.582
    },
    {
      "id": "l847-c22-c37",
      "origem": "c22",
      "destino": "c37",
      "distância": 215.674
    },
    {
      "id": "l848-c21-c26",
      "origem": "c21",
      "destino": "c26",
      "distância": 199.423
    },
    {
      "id": "l849-c55-c88",
      "origem": "c55",
      "destino": "c88",
      "distância": 531.057
    },
    {
      "id": "l850-c54-c91",
      "origem": "c54",
      "destino": "c91",
      "distância": 496.407
    },
    {
      "id": "l851-c86-c98",
      "origem": "c86",
      "destino": "c98",
      "distância": 100.834
    },
    {
      "id": "l852-c31-c50",
      "origem": "c31",
      "destino": "c50",
      "distância": 143.571
    },
    {
      "id": "l853-c26-c71",
      "origem": "c26",
      "destino": "c71",
      "distância": 183.018
    },
    {
      "id": "l854-c54-c87",
      "origem": "c54",
      "destino": "c87",
      "distância": 200.405
    },
    {
      "id": "l855-c28-c37",
      "origem": "c28",
      "destino": "c37",
      "distância": 386.062
    },
    {
      "id": "l856-c10-c63",
      "origem": "c10",
      "destino": "c63",
      "distância": 572.642
    },
    {
      "id": "l857-c2-c56",
      "origem": "c2",
      "destino": "c56",
      "distância": 97.392
    },
    {
      "id": "l858-c23-c32",
      "origem": "c23",
      "destino": "c32",
      "distância": 8.675
    },
    {
      "id": "l859-c42-c88",
      "origem": "c42",
      "destino": "c88",
      "distância": 41.187
    },
    {
      "id": "l860-c38-c77",
      "origem": "c38",
      "destino": "c77",
      "distância": 156.477
    },
    {
      "id": "l861-c9-c76",
      "origem": "c9",
      "destino": "c76",
      "distância": 432.47
    },
    {
      "id": "l862-c75-c77",
      "origem": "c75",
      "destino": "c77",
      "distância": 238.272
    },
    {
      "id": "l863-c2-c68",
      "origem": "c2",
      "destino": "c68",
      "distância": 175.729
    },
    {
      "id": "l864-c16-c60",
      "origem": "c16",
      "destino": "c60",
      "distância": 46.974
    },
    {
      "id": "l865-c12-c49",
      "origem": "c12",
      "destino": "c49",
      "distância": 448.342
    },
    {
      "id": "l866-c72-c81",
      "origem": "c72",
      "destino": "c81",
      "distância": 523.381
    },
    {
      "id": "l867-c53-c90",
      "origem": "c53",
      "destino": "c90",
      "distância": 312.703
    },
    {
      "id": "l868-c29-c47",
      "origem": "c29",
      "destino": "c47",
      "distância": 389.871
    },
    {
      "id": "l869-c41-c93",
      "origem": "c41",
      "destino": "c93",
      "distância": 350.605
    },
    {
      "id": "l870-c41-c63",
      "origem": "c41",
      "destino": "c63",
      "distância": 590.886
    },
    {
      "id": "l871-c5-c56",
      "origem": "c5",
      "destino": "c56",
      "distância": 484.46
    },
    {
      "id": "l872-c22-c61",
      "origem": "c22",
      "destino": "c61",
      "distância": 29.263
    },
    {
      "id": "l873-c5-c36",
      "origem": "c5",
      "destino": "c36",
      "distância": 444.066
    },
    {
      "id": "l874-c2-c87",
      "origem": "c2",
      "destino": "c87",
      "distância": 56.273
    },
    {
      "id": "l875-c23-c56",
      "origem": "c23",
      "destino": "c56",
      "distância": 282.767
    },
    {
      "id": "l876-c32-c78",
      "origem": "c32",
      "destino": "c78",
      "distância": 344.919
    },
    {
      "id": "l877-c27-c42",
      "origem": "c27",
      "destino": "c42",
      "distância": 54.529
    },
    {
      "id": "l878-c51-c75",
      "origem": "c51",
      "destino": "c75",
      "distância": 312.036
    },
    {
      "id": "l879-c48-c55",
      "origem": "c48",
      "destino": "c55",
      "distância": 512.812
    },
    {
      "id": "l880-c36-c84",
      "origem": "c36",
      "destino": "c84",
      "distância": 90.965
    },
    {
      "id": "l881-c35-c60",
      "origem": "c35",
      "destino": "c60",
      "distância": 231.767
    },
    {
      "id": "l882-c24-c43",
      "origem": "c24",
      "destino": "c43",
      "distância": 66.112
    },
    {
      "id": "l883-c65-c66",
      "origem": "c65",
      "destino": "c66",
      "distância": 385.967
    },
    {
      "id": "l884-c1-c96",
      "origem": "c1",
      "destino": "c96",
      "distância": 290.232
    },
    {
      "id": "l885-c75-c93",
      "origem": "c75",
      "destino": "c93",
      "distância": 51.086
    },
    {
      "id": "l886-c30-c82",
      "origem": "c30",
      "destino": "c82",
      "distância": 354.465
    },
    {
      "id": "l887-c67-c70",
      "origem": "c67",
      "destino": "c70",
      "distância": 101.44
    },
    {
      "id": "l888-c40-c57",
      "origem": "c40",
      "destino": "c57",
      "distância": 314.054
    },
    {
      "id": "l889-c24-c79",
      "origem": "c24",
      "destino": "c79",
      "distância": 550.802
    },
    {
      "id": "l890-c58-c69",
      "origem": "c58",
      "destino": "c69",
      "distância": 159.01
    },
    {
      "id": "l891-c43-c51",
      "origem": "c43",
      "destino": "c51",
      "distância": 133.08
    },
    {
      "id": "l892-c38-c90",
      "origem": "c38",
      "destino": "c90",
      "distância": 480.977
    },
    {
      "id": "l893-c7-c49",
      "origem": "c7",
      "destino": "c49",
      "distância": 212.759
    },
    {
      "id": "l894-c13-c28",
      "origem": "c13",
      "destino": "c28",
      "distância": 75.357
    },
    {
      "id": "l895-c2-c40",
      "origem": "c2",
      "destino": "c40",
      "distância": 296.433
    },
    {
      "id": "l896-c8-c71",
      "origem": "c8",
      "destino": "c71",
      "distância": 262.386
    },
    {
      "id": "l897-c15-c88",
      "origem": "c15",
      "destino": "c88",
      "distância": 172.622
    },
    {
      "id": "l898-c45-c99",
      "origem": "c45",
      "destino": "c99",
      "distância": 430.776
    },
    {
      "id": "l899-c69-c73",
      "origem": "c69",
      "destino": "c73",
      "distância": 452.381
    },
    {
      "id": "l900-c10-c70",
      "origem": "c10",
      "destino": "c70",
      "distância": 79.68
    },
    {
      "id": "l901-c18-c60",
      "origem": "c18",
      "destino": "c60",
      "distância": 598.052
    },
    {
      "id": "l902-c18-c40",
      "origem": "c18",
      "destino": "c40",
      "distância": 396.571
    },
    {
      "id": "l903-c29-c76",
      "origem": "c29",
      "destino": "c76",
      "distância": 221.301
    },
    {
      "id": "l904-c40-c44",
      "origem": "c40",
      "destino": "c44",
      "distância": 280.317
    },
    {
      "id": "l905-c56-c93",
      "origem": "c56",
      "destino": "c93",
      "distância": 465.556
    },
    {
      "id": "l906-c22-c66",
      "origem": "c22",
      "destino": "c66",
      "distância": 190.18
    },
    {
      "id": "l907-c41-c99",
      "origem": "c41",
      "destino": "c99",
      "distância": 443.49
    },
    {
      "id": "l908-c5-c42",
      "origem": "c5",
      "destino": "c42",
      "distância": 226.386
    },
    {
      "id": "l909-c33-c89",
      "origem": "c33",
      "destino": "c89",
      "distância": 218.406
    },
    {
      "id": "l910-c74-c93",
      "origem": "c74",
      "destino": "c93",
      "distância": 278.245
    },
    {
      "id": "l911-c76-c88",
      "origem": "c76",
      "destino": "c88",
      "distância": 531.925
    },
    {
      "id": "l912-c9-c33",
      "origem": "c9",
      "destino": "c33",
      "distância": 476.963
    },
    {
      "id": "l913-c31-c79",
      "origem": "c31",
      "destino": "c79",
      "distância": 352.584
    },
    {
      "id": "l914-c2-c62",
      "origem": "c2",
      "destino": "c62",
      "distância": 536.566
    },
    {
      "id": "l915-c45-c50",
      "origem": "c45",
      "destino": "c50",
      "distância": 521.357
    },
    {
      "id": "l916-c18-c37",
      "origem": "c18",
      "destino": "c37",
      "distância": 460.575
    },
    {
      "id": "l917-c92-c96",
      "origem": "c92",
      "destino": "c96",
      "distância": 263.947
    },
    {
      "id": "l918-c59-c100",
      "origem": "c59",
      "destino": "c100",
      "distância": 478.445
    },
    {
      "id": "l919-c75-c90",
      "origem": "c75",
      "destino": "c90",
      "distância": 140.667
    },
    {
      "id": "l920-c10-c35",
      "origem": "c10",
      "destino": "c35",
      "distância": 52.431
    },
    {
      "id": "l921-c5-c81",
      "origem": "c5",
      "destino": "c81",
      "distância": 11.078
    },
    {
      "id": "l922-c52-c90",
      "origem": "c52",
      "destino": "c90",
      "distância": 158.774
    },
    {
      "id": "l923-c43-c88",
      "origem": "c43",
      "destino": "c88",
      "distância": 178.147
    },
    {
      "id": "l924-c43-c81",
      "origem": "c43",
      "destino": "c81",
      "distância": 359.024
    },
    {
      "id": "l925-c29-c41",
      "origem": "c29",
      "destino": "c41",
      "distância": 482.457
    },
    {
      "id": "l926-c95-c98",
      "origem": "c95",
      "destino": "c98",
      "distância": 50.226
    },
    {
      "id": "l927-c49-c70",
      "origem": "c49",
      "destino": "c70",
      "distância": 210.613
    },
    {
      "id": "l928-c18-c92",
      "origem": "c18",
      "destino": "c92",
      "distância": 194.877
    },
    {
      "id": "l929-c87-c93",
      "origem": "c87",
      "destino": "c93",
      "distância": 437.783
    },
    {
      "id": "l930-c56-c68",
      "origem": "c56",
      "destino": "c68",
      "distância": 373.921
    },
    {
      "id": "l931-c82-c97",
      "origem": "c82",
      "destino": "c97",
      "distância": 242.977
    },
    {
      "id": "l932-c76-c90",
      "origem": "c76",
      "destino": "c90",
      "distância": 218.307
    },
    {
      "id": "l933-c57-c76",
      "origem": "c57",
      "destino": "c76",
      "distância": 51.367
    },
    {
      "id": "l934-c39-c90",
      "origem": "c39",
      "destino": "c90",
      "distância": 585.21
    },
    {
      "id": "l935-c82-c92",
      "origem": "c82",
      "destino": "c92",
      "distância": 255.844
    },
    {
      "id": "l936-c20-c58",
      "origem": "c20",
      "destino": "c58",
      "distância": 10.176
    },
    {
      "id": "l937-c25-c40",
      "origem": "c25",
      "destino": "c40",
      "distância": 211.819
    },
    {
      "id": "l938-c28-c43",
      "origem": "c28",
      "destino": "c43",
      "distância": 344.751
    },
    {
      "id": "l939-c10-c87",
      "origem": "c10",
      "destino": "c87",
      "distância": 38.85
    },
    {
      "id": "l940-c32-c100",
      "origem": "c32",
      "destino": "c100",
      "distância": 317.535
    },
    {
      "id": "l941-c60-c66",
      "origem": "c60",
      "destino": "c66",
      "distância": 308.62
    },
    {
      "id": "l942-c13-c46",
      "origem": "c13",
      "destino": "c46",
      "distância": 582.567
    },
    {
      "id": "l943-c17-c87",
      "origem": "c17",
      "destino": "c87",
      "distância": 116.734
    },
    {
      "id": "l944-c72-c97",
      "origem": "c72",
      "destino": "c97",
      "distância": 29.599
    },
    {
      "id": "l945-c14-c31",
      "origem": "c14",
      "destino": "c31",
      "distância": 556.311
    },
    {
      "id": "l946-c60-c84",
      "origem": "c60",
      "destino": "c84",
      "distância": 493.895
    },
    {
      "id": "l947-c74-c76",
      "origem": "c74",
      "destino": "c76",
      "distância": 528.522
    },
    {
      "id": "l948-c54-c96",
      "origem": "c54",
      "destino": "c96",
      "distância": 512.209
    },
    {
      "id": "l949-c59-c81",
      "origem": "c59",
      "destino": "c81",
      "distância": 110.565
    },
    {
      "id": "l950-c18-c27",
      "origem": "c18",
      "destino": "c27",
      "distância": 286.193
    },
    {
      "id": "l951-c63-c77",
      "origem": "c63",
      "destino": "c77",
      "distância": 239.543
    },
    {
      "id": "l952-c61-c89",
      "origem": "c61",
      "destino": "c89",
      "distância": 131.895
    },
    {
      "id": "l953-c4-c41",
      "origem": "c4",
      "destino": "c41",
      "distância": 277.16
    },
    {
      "id": "l954-c42-c89",
      "origem": "c42",
      "destino": "c89",
      "distância": 53.682
    },
    {
      "id": "l955-c50-c94",
      "origem": "c50",
      "destino": "c94",
      "distância": 29.214
    },
    {
      "id": "l956-c6-c27",
      "origem": "c6",
      "destino": "c27",
      "distância": 217.65
    },
    {
      "id": "l957-c33-c56",
      "origem": "c33",
      "destino": "c56",
      "distância": 516.283
    },
    {
      "id": "l958-c25-c29",
      "origem": "c25",
      "destino": "c29",
      "distância": 252.338
    },
    {
      "id": "l959-c22-c27",
      "origem": "c22",
      "destino": "c27",
      "distância": 453.268
    },
    {
      "id": "l960-c44-c82",
      "origem": "c44",
      "destino": "c82",
      "distância": 88.739
    },
    {
      "id": "l961-c69-c72",
      "origem": "c69",
      "destino": "c72",
      "distância": 377.24
    },
    {
      "id": "l962-c20-c99",
      "origem": "c20",
      "destino": "c99",
      "distância": 526.414
    },
    {
      "id": "l963-c44-c73",
      "origem": "c44",
      "destino": "c73",
      "distância": 254.842
    },
    {
      "id": "l964-c6-c17",
      "origem": "c6",
      "destino": "c17",
      "distância": 171.153
    },
    {
      "id": "l965-c25-c45",
      "origem": "c25",
      "destino": "c45",
      "distância": 539.036
    },
    {
      "id": "l966-c25-c43",
      "origem": "c25",
      "destino": "c43",
      "distância": 125.059
    },
    {
      "id": "l967-c88-c93",
      "origem": "c88",
      "destino": "c93",
      "distância": 546.337
    },
    {
      "id": "l968-c54-c95",
      "origem": "c54",
      "destino": "c95",
      "distância": 54.22
    },
    {
      "id": "l969-c16-c56",
      "origem": "c16",
      "destino": "c56",
      "distância": 215.387
    },
    {
      "id": "l970-c36-c63",
      "origem": "c36",
      "destino": "c63",
      "distância": 136.024
    },
    {
      "id": "l971-c20-c78",
      "origem": "c20",
      "destino": "c78",
      "distância": 455.404
    },
    {
      "id": "l972-c10-c86",
      "origem": "c10",
      "destino": "c86",
      "distância": 156.003
    },
    {
      "id": "l973-c65-c87",
      "origem": "c65",
      "destino": "c87",
      "distância": 141.254
    },
    {
      "id": "l974-c37-c70",
      "origem": "c37",
      "destino": "c70",
      "distância": 22.215
    },
    {
      "id": "l975-c20-c95",
      "origem": "c20",
      "destino": "c95",
      "distância": 525.317
    },
    {
      "id": "l976-c50-c87",
      "origem": "c50",
      "destino": "c87",
      "distância": 79.526
    },
    {
      "id": "l977-c83-c85",
      "origem": "c83",
      "destino": "c85",
      "distância": 175.812
    },
    {
      "id": "l978-c34-c88",
      "origem": "c34",
      "destino": "c88",
      "distância": 522.838
    },
    {
      "id": "l979-c18-c97",
      "origem": "c18",
      "destino": "c97",
      "distância": 173.014
    },
    {
      "id": "l980-c48-c53",
      "origem": "c48",
      "destino": "c53",
      "distância": 262.854
    },
    {
      "id": "l981-c33-c94",
      "origem": "c33",
      "destino": "c94",
      "distância": 9.478
    },
    {
      "id": "l982-c15-c26",
      "origem": "c15",
      "destino": "c26",
      "distância": 199.223
    },
    {
      "id": "l983-c47-c74",
      "origem": "c47",
      "destino": "c74",
      "distância": 191.621
    },
    {
      "id": "l984-c68-c79",
      "origem": "c68",
      "destino": "c79",
      "distância": 57.881
    },
    {
      "id": "l985-c85-c97",
      "origem": "c85",
      "destino": "c97",
      "distância": 345.651
    },
    {
      "id": "l986-c44-c53",
      "origem": "c44",
      "destino": "c53",
      "distância": 494.743
    },
    {
      "id": "l987-c29-c77",
      "origem": "c29",
      "destino": "c77",
      "distância": 33.041
    },
    {
      "id": "l988-c9-c67",
      "origem": "c9",
      "destino": "c67",
      "distância": 408.499
    },
    {
      "id": "l989-c61-c81",
      "origem": "c61",
      "destino": "c81",
      "distância": 186.6
    },
    {
      "id": "l990-c30-c61",
      "origem": "c30",
      "destino": "c61",
      "distância": 344.199
    },
    {
      "id": "l991-c12-c57",
      "origem": "c12",
      "destino": "c57",
      "distância": 443.428
    },
    {
      "id": "l992-c27-c36",
      "origem": "c27",
      "destino": "c36",
      "distância": 68.078
    },
    {
      "id": "l993-c6-c16",
      "origem": "c6",
      "destino": "c16",
      "distância": 342.968
    },
    {
      "id": "l994-c5-c26",
      "origem": "c5",
      "destino": "c26",
      "distância": 397.181
    },
    {
      "id": "l995-c25-c36",
      "origem": "c25",
      "destino": "c36",
      "distância": 243.409
    },
    {
      "id": "l996-c57-c59",
      "origem": "c57",
      "destino": "c59",
      "distância": 458.232
    },
    {
      "id": "l997-c16-c84",
      "origem": "c16",
      "destino": "c84",
      "distância": 53.523
    },
    {
      "id": "l998-c5-c25",
      "origem": "c5",
      "destino": "c25",
      "distância": 416.12
    },
    {
      "id": "l999-c71-c85",
      "origem": "c71",
      "destino": "c85",
      "distância": 468.022
    },
    {
      "id": "l1000-c27-c32",
      "origem": "c27",
      "destino": "c32",
      "distância": 264.589
    },
    {
      "id": "l1001-c56-c81",
      "origem": "c56",
      "destino": "c81",
      "distância": 557.924
    },
    {
      "id": "l1002-c13-c84",
      "origem": "c13",
      "destino": "c84",
      "distância": 244.993
    },
    {
      "id": "l1003-c1-c86",
      "origem": "c1",
      "destino": "c86",
      "distância": 472.203
    },
    {
      "id": "l1004-c77-c78",
      "origem": "c77",
      "destino": "c78",
      "distância": 266.409
    },
    {
      "id": "l1005-c10-c73",
      "origem": "c10",
      "destino": "c73",
      "distância": 99.924
    },
    {
      "id": "l1006-c4-c17",
      "origem": "c4",
      "destino": "c17",
      "distância": 560.5
    },
    {
      "id": "l1007-c45-c64",
      "origem": "c45",
      "destino": "c64",
      "distância": 36.887
    },
    {
      "id": "l1008-c11-c60",
      "origem": "c11",
      "destino": "c60",
      "distância": 318.859
    },
    {
      "id": "l1009-c26-c28",
      "origem": "c26",
      "destino": "c28",
      "distância": 501.657
    },
    {
      "id": "l1010-c21-c64",
      "origem": "c21",
      "destino": "c64",
      "distância": 488.225
    },
    {
      "id": "l1011-c22-c63",
      "origem": "c22",
      "destino": "c63",
      "distância": 160.024
    },
    {
      "id": "l1012-c53-c92",
      "origem": "c53",
      "destino": "c92",
      "distância": 265.926
    },
    {
      "id": "l1013-c1-c47",
      "origem": "c1",
      "destino": "c47",
      "distância": 447.141
    },
    {
      "id": "l1014-c58-c63",
      "origem": "c58",
      "destino": "c63",
      "distância": 427.756
    },
    {
      "id": "l1015-c23-c48",
      "origem": "c23",
      "destino": "c48",
      "distância": 201.681
    },
    {
      "id": "l1016-c37-c98",
      "origem": "c37",
      "destino": "c98",
      "distância": 6.982
    },
    {
      "id": "l1017-c8-c65",
      "origem": "c8",
      "destino": "c65",
      "distância": 560.317
    },
    {
      "id": "l1018-c4-c37",
      "origem": "c4",
      "destino": "c37",
      "distância": 309.337
    },
    {
      "id": "l1019-c37-c93",
      "origem": "c37",
      "destino": "c93",
      "distância": 104.64
    },
    {
      "id": "l1020-c32-c34",
      "origem": "c32",
      "destino": "c34",
      "distância": 337.127
    },
    {
      "id": "l1021-c36-c62",
      "origem": "c36",
      "destino": "c62",
      "distância": 415.022
    },
    {
      "id": "l1022-c27-c87",
      "origem": "c27",
      "destino": "c87",
      "distância": 8.75
    },
    {
      "id": "l1023-c24-c30",
      "origem": "c24",
      "destino": "c30",
      "distância": 459.496
    },
    {
      "id": "l1024-c20-c66",
      "origem": "c20",
      "destino": "c66",
      "distância": 489.506
    },
    {
      "id": "l1025-c38-c70",
      "origem": "c38",
      "destino": "c70",
      "distância": 98.569
    },
    {
      "id": "l1026-c78-c94",
      "origem": "c78",
      "destino": "c94",
      "distância": 520.496
    },
    {
      "id": "l1027-c11-c21",
      "origem": "c11",
      "destino": "c21",
      "distância": 180.614
    },
    {
      "id": "l1028-c15-c89",
      "origem": "c15",
      "destino": "c89",
      "distância": 188.967
    },
    {
      "id": "l1029-c67-c97",
      "origem": "c67",
      "destino": "c97",
      "distância": 450.597
    },
    {
      "id": "l1030-c60-c88",
      "origem": "c60",
      "destino": "c88",
      "distância": 548.863
    },
    {
      "id": "l1031-c2-c65",
      "origem": "c2",
      "destino": "c65",
      "distância": 243.529
    },
    {
      "id": "l1032-c52-c100",
      "origem": "c52",
      "destino": "c100",
      "distância": 68.424
    },
    {
      "id": "l1033-c36-c61",
      "origem": "c36",
      "destino": "c61",
      "distância": 270.467
    },
    {
      "id": "l1034-c19-c78",
      "origem": "c19",
      "destino": "c78",
      "distância": 486.038
    },
    {
      "id": "l1035-c26-c31",
      "origem": "c26",
      "destino": "c31",
      "distância": 248.603
    },
    {
      "id": "l1036-c8-c54",
      "origem": "c8",
      "destino": "c54",
      "distância": 503.935
    },
    {
      "id": "l1037-c29-c86",
      "origem": "c29",
      "destino": "c86",
      "distância": 238.945
    },
    {
      "id": "l1038-c27-c83",
      "origem": "c27",
      "destino": "c83",
      "distância": 159.622
    },
    {
      "id": "l1039-c8-c14",
      "origem": "c8",
      "destino": "c14",
      "distância": 184.23
    },
    {
      "id": "l1040-c15-c78",
      "origem": "c15",
      "destino": "c78",
      "distância": 447.552
    },
    {
      "id": "l1041-c58-c71",
      "origem": "c58",
      "destino": "c71",
      "distância": 233.615
    },
    {
      "id": "l1042-c44-c90",
      "origem": "c44",
      "destino": "c90",
      "distância": 8.944
    },
    {
      "id": "l1043-c12-c80",
      "origem": "c12",
      "destino": "c80",
      "distância": 270.477
    },
    {
      "id": "l1044-c46-c60",
      "origem": "c46",
      "destino": "c60",
      "distância": 363.179
    },
    {
      "id": "l1045-c44-c94",
      "origem": "c44",
      "destino": "c94",
      "distância": 242.845
    },
    {
      "id": "l1046-c62-c75",
      "origem": "c62",
      "destino": "c75",
      "distância": 492.221
    },
    {
      "id": "l1047-c41-c82",
      "origem": "c41",
      "destino": "c82",
      "distância": 26.619
    },
    {
      "id": "l1048-c72-c99",
      "origem": "c72",
      "destino": "c99",
      "distância": 189.738
    },
    {
      "id": "l1049-c38-c53",
      "origem": "c38",
      "destino": "c53",
      "distância": 72.77
    },
    {
      "id": "l1050-c3-c56",
      "origem": "c3",
      "destino": "c56",
      "distância": 460.915
    },
    {
      "id": "l1051-c41-c91",
      "origem": "c41",
      "destino": "c91",
      "distância": 358.79
    },
    {
      "id": "l1052-c40-c67",
      "origem": "c40",
      "destino": "c67",
      "distância": 597.598
    },
    {
      "id": "l1053-c36-c58",
      "origem": "c36",
      "destino": "c58",
      "distância": 579.136
    },
    {
      "id": "l1054-c73-c99",
      "origem": "c73",
      "destino": "c99",
      "distância": 240.185
    },
    {
      "id": "l1055-c60-c73",
      "origem": "c60",
      "destino": "c73",
      "distância": 563.955
    },
    {
      "id": "l1056-c15-c30",
      "origem": "c15",
      "destino": "c30",
      "distância": 277.13
    },
    {
      "id": "l1057-c23-c47",
      "origem": "c23",
      "destino": "c47",
      "distância": 83.816
    },
    {
      "id": "l1058-c9-c19",
      "origem": "c9",
      "destino": "c19",
      "distância": 370.222
    },
    {
      "id": "l1059-c47-c52",
      "origem": "c47",
      "destino": "c52",
      "distância": 290.274
    },
    {
      "id": "l1060-c2-c42",
      "origem": "c2",
      "destino": "c42",
      "distância": 273.41
    },
    {
      "id": "l1061-c11-c54",
      "origem": "c11",
      "destino": "c54",
      "distância": 224.71
    },
    {
      "id": "l1062-c14-c73",
      "origem": "c14",
      "destino": "c73",
      "distância": 350.915
    },
    {
      "id": "l1063-c13-c54",
      "origem": "c13",
      "destino": "c54",
      "distância": 523.59
    },
    {
      "id": "l1064-c82-c96",
      "origem": "c82",
      "destino": "c96",
      "distância": 453.903
    },
    {
      "id": "l1065-c76-c87",
      "origem": "c76",
      "destino": "c87",
      "distância": 378.61
    },
    {
      "id": "l1066-c48-c67",
      "origem": "c48",
      "destino": "c67",
      "distância": 6.368
    },
    {
      "id": "l1067-c72-c93",
      "origem": "c72",
      "destino": "c93",
      "distância": 34.713
    },
    {
      "id": "l1068-c34-c89",
      "origem": "c34",
      "destino": "c89",
      "distância": 78.576
    },
    {
      "id": "l1069-c6-c61",
      "origem": "c6",
      "destino": "c61",
      "distância": 483.588
    },
    {
      "id": "l1070-c82-c100",
      "origem": "c82",
      "destino": "c100",
      "distância": 60.353
    },
    {
      "id": "l1071-c52-c97",
      "origem": "c52",
      "destino": "c97",
      "distância": 215.484
    },
    {
      "id": "l1072-c57-c88",
      "origem": "c57",
      "destino": "c88",
      "distância": 195.523
    },
    {
      "id": "l1073-c26-c69",
      "origem": "c26",
      "destino": "c69",
      "distância": 474.774
    },
    {
      "id": "l1074-c6-c33",
      "origem": "c6",
      "destino": "c33",
      "distância": 36.1
    },
    {
      "id": "l1075-c25-c32",
      "origem": "c25",
      "destino": "c32",
      "distância": 307.103
    },
    {
      "id": "l1076-c27-c95",
      "origem": "c27",
      "destino": "c95",
      "distância": 78.614
    },
    {
      "id": "l1077-c2-c59",
      "origem": "c2",
      "destino": "c59",
      "distância": 585.815
    },
    {
      "id": "l1078-c44-c74",
      "origem": "c44",
      "destino": "c74",
      "distância": 464.575
    },
    {
      "id": "l1079-c27-c74",
      "origem": "c27",
      "destino": "c74",
      "distância": 170.728
    },
    {
      "id": "l1080-c26-c47",
      "origem": "c26",
      "destino": "c47",
      "distância": 420.734
    },
    {
      "id": "l1081-c66-c79",
      "origem": "c66",
      "destino": "c79",
      "distância": 144.493
    },
    {
      "id": "l1082-c2-c88",
      "origem": "c2",
      "destino": "c88",
      "distância": 216.297
    },
    {
      "id": "l1083-c4-c7",
      "origem": "c4",
      "destino": "c7",
      "distância": 579.397
    },
    {
      "id": "l1084-c15-c84",
      "origem": "c15",
      "destino": "c84",
      "distância": 455.892
    },
    {
      "id": "l1085-c48-c60",
      "origem": "c48",
      "destino": "c60",
      "distância": 196.414
    },
    {
      "id": "l1086-c2-c50",
      "origem": "c2",
      "destino": "c50",
      "distância": 439.72
    },
    {
      "id": "l1087-c72-c78",
      "origem": "c72",
      "destino": "c78",
      "distância": 406.94
    },
    {
      "id": "l1088-c1-c63",
      "origem": "c1",
      "destino": "c63",
      "distância": 130.18
    },
    {
      "id": "l1089-c47-c59",
      "origem": "c47",
      "destino": "c59",
      "distância": 173.942
    },
    {
      "id": "l1090-c22-c39",
      "origem": "c22",
      "destino": "c39",
      "distância": 497.665
    },
    {
      "id": "l1091-c14-c34",
      "origem": "c14",
      "destino": "c34",
      "distância": 313.646
    },
    {
      "id": "l1092-c63-c88",
      "origem": "c63",
      "destino": "c88",
      "distância": 299.918
    },
    {
      "id": "l1093-c43-c90",
      "origem": "c43",
      "destino": "c90",
      "distância": 119.474
    },
    {
      "id": "l1094-c53-c58",
      "origem": "c53",
      "destino": "c58",
      "distância": 449.866
    },
    {
      "id": "l1095-c2-c27",
      "origem": "c2",
      "destino": "c27",
      "distância": 63.247
    },
    {
      "id": "l1096-c17-c71",
      "origem": "c17",
      "destino": "c71",
      "distância": 414.484
    },
    {
      "id": "l1097-c80-c89",
      "origem": "c80",
      "destino": "c89",
      "distância": 275.726
    },
    {
      "id": "l1098-c54-c73",
      "origem": "c54",
      "destino": "c73",
      "distância": 356.579
    },
    {
      "id": "l1099-c11-c28",
      "origem": "c11",
      "destino": "c28",
      "distância": 574.938
    },
    {
      "id": "l1100-c20-c27",
      "origem": "c20",
      "destino": "c27",
      "distância": 533.074
    },
    {
      "id": "l1101-c22-c80",
      "origem": "c22",
      "destino": "c80",
      "distância": 516.655
    },
    {
      "id": "l1102-c56-c99",
      "origem": "c56",
      "destino": "c99",
      "distância": 551.583
    },
    {
      "id": "l1103-c14-c47",
      "origem": "c14",
      "destino": "c47",
      "distância": 10.416
    },
    {
      "id": "l1104-c28-c31",
      "origem": "c28",
      "destino": "c31",
      "distância": 30.861
    },
    {
      "id": "l1105-c19-c42",
      "origem": "c19",
      "destino": "c42",
      "distância": 73.328
    },
    {
      "id": "l1106-c39-c88",
      "origem": "c39",
      "destino": "c88",
      "distância": 579.383
    },
    {
      "id": "l1107-c9-c42",
      "origem": "c9",
      "destino": "c42",
      "distância": 412.955
    },
    {
      "id": "l1108-c14-c82",
      "origem": "c14",
      "destino": "c82",
      "distância": 326.165
    },
    {
      "id": "l1109-c28-c63",
      "origem": "c28",
      "destino": "c63",
      "distância": 264.789
    },
    {
      "id": "l1110-c85-c100",
      "origem": "c85",
      "destino": "c100",
      "distância": 114.338
    },
    {
      "id": "l1111-c80-c99",
      "origem": "c80",
      "destino": "c99",
      "distância": 233.135
    },
    {
      "id": "l1112-c79-c93",
      "origem": "c79",
      "destino": "c93",
      "distância": 495.632
    },
    {
      "id": "l1113-c1-c12",
      "origem": "c1",
      "destino": "c12",
      "distância": 523.263
    },
    {
      "id": "l1114-c41-c81",
      "origem": "c41",
      "destino": "c81",
      "distância": 74.92
    },
    {
      "id": "l1115-c15-c73",
      "origem": "c15",
      "destino": "c73",
      "distância": 333.006
    },
    {
      "id": "l1116-c23-c65",
      "origem": "c23",
      "destino": "c65",
      "distância": 108.402
    },
    {
      "id": "l1117-c35-c80",
      "origem": "c35",
      "destino": "c80",
      "distância": 277.504
    },
    {
      "id": "l1118-c42-c79",
      "origem": "c42",
      "destino": "c79",
      "distância": 196.474
    },
    {
      "id": "l1119-c9-c100",
      "origem": "c9",
      "destino": "c100",
      "distância": 483.108
    },
    {
      "id": "l1120-c47-c77",
      "origem": "c47",
      "destino": "c77",
      "distância": 455.43
    },
    {
      "id": "l1121-c49-c81",
      "origem": "c49",
      "destino": "c81",
      "distância": 367.149
    },
    {
      "id": "l1122-c49-c73",
      "origem": "c49",
      "destino": "c73",
      "distância": 205.467
    },
    {
      "id": "l1123-c45-c67",
      "origem": "c45",
      "destino": "c67",
      "distância": 209.591
    },
    {
      "id": "l1124-c33-c93",
      "origem": "c33",
      "destino": "c93",
      "distância": 416.126
    },
    {
      "id": "l1125-c10-c95",
      "origem": "c10",
      "destino": "c95",
      "distância": 456.777
    },
    {
      "id": "l1126-c3-c18",
      "origem": "c3",
      "destino": "c18",
      "distância": 56.006
    },
    {
      "id": "l1127-c53-c86",
      "origem": "c53",
      "destino": "c86",
      "distância": 402.245
    },
    {
      "id": "l1128-c2-c70",
      "origem": "c2",
      "destino": "c70",
      "distância": 228.999
    },
    {
      "id": "l1129-c82-c99",
      "origem": "c82",
      "destino": "c99",
      "distância": 535.326
    },
    {
      "id": "l1130-c61-c74",
      "origem": "c61",
      "destino": "c74",
      "distância": 67.661
    },
    {
      "id": "l1131-c81-c92",
      "origem": "c81",
      "destino": "c92",
      "distância": 204.606
    },
    {
      "id": "l1132-c17-c55",
      "origem": "c17",
      "destino": "c55",
      "distância": 466.339
    },
    {
      "id": "l1133-c53-c72",
      "origem": "c53",
      "destino": "c72",
      "distância": 29.491
    },
    {
      "id": "l1134-c38-c62",
      "origem": "c38",
      "destino": "c62",
      "distância": 342.651
    },
    {
      "id": "l1135-c42-c82",
      "origem": "c42",
      "destino": "c82",
      "distância": 151.117
    },
    {
      "id": "l1136-c56-c91",
      "origem": "c56",
      "destino": "c91",
      "distância": 36.227
    },
    {
      "id": "l1137-c45-c56",
      "origem": "c45",
      "destino": "c56",
      "distância": 248.959
    },
    {
      "id": "l1138-c48-c89",
      "origem": "c48",
      "destino": "c89",
      "distância": 164.946
    },
    {
      "id": "l1139-c51-c87",
      "origem": "c51",
      "destino": "c87",
      "distância": 24.876
    },
    {
      "id": "l1140-c18-c78",
      "origem": "c18",
      "destino": "c78",
      "distância": 569.836
    },
    {
      "id": "l1141-c12-c30",
      "origem": "c12",
      "destino": "c30",
      "distância": 61.127
    },
    {
      "id": "l1142-c32-c79",
      "origem": "c32",
      "destino": "c79",
      "distância": 202.532
    },
    {
      "id": "l1143-c71-c81",
      "origem": "c71",
      "destino": "c81",
      "distância": 420.313
    },
    {
      "id": "l1144-c61-c76",
      "origem": "c61",
      "destino": "c76",
      "distância": 425.073
    },
    {
      "id": "l1145-c26-c78",
      "origem": "c26",
      "destino": "c78",
      "distância": 158.527
    },
    {
      "id": "l1146-c14-c36",
      "origem": "c14",
      "destino": "c36",
      "distância": 533.757
    },
    {
      "id": "l1147-c36-c77",
      "origem": "c36",
      "destino": "c77",
      "distância": 260.934
    },
    {
      "id": "l1148-c28-c49",
      "origem": "c28",
      "destino": "c49",
      "distância": 339.432
    },
    {
      "id": "l1149-c6-c100",
      "origem": "c6",
      "destino": "c100",
      "distância": 560.063
    },
    {
      "id": "l1150-c19-c88",
      "origem": "c19",
      "destino": "c88",
      "distância": 271.562
    },
    {
      "id": "l1151-c5-c31",
      "origem": "c5",
      "destino": "c31",
      "distância": 498.946
    },
    {
      "id": "l1152-c16-c73",
      "origem": "c16",
      "destino": "c73",
      "distância": 342.004
    },
    {
      "id": "l1153-c63-c86",
      "origem": "c63",
      "destino": "c86",
      "distância": 347.828
    },
    {
      "id": "l1154-c50-c86",
      "origem": "c50",
      "destino": "c86",
      "distância": 571.428
    },
    {
      "id": "l1155-c26-c39",
      "origem": "c26",
      "destino": "c39",
      "distância": 162.071
    },
    {
      "id": "l1156-c10-c67",
      "origem": "c10",
      "destino": "c67",
      "distância": 438.865
    },
    {
      "id": "l1157-c1-c69",
      "origem": "c1",
      "destino": "c69",
      "distância": 166.436
    },
    {
      "id": "l1158-c28-c53",
      "origem": "c28",
      "destino": "c53",
      "distância": 434.976
    },
    {
      "id": "l1159-c24-c55",
      "origem": "c24",
      "destino": "c55",
      "distância": 564.489
    },
    {
      "id": "l1160-c72-c90",
      "origem": "c72",
      "destino": "c90",
      "distância": 357.586
    },
    {
      "id": "l1161-c27-c86",
      "origem": "c27",
      "destino": "c86",
      "distância": 252.347
    },
    {
      "id": "l1162-c3-c70",
      "origem": "c3",
      "destino": "c70",
      "distância": 453.197
    },
    {
      "id": "l1163-c43-c71",
      "origem": "c43",
      "destino": "c71",
      "distância": 253.249
    },
    {
      "id": "l1164-c23-c29",
      "origem": "c23",
      "destino": "c29",
      "distância": 36.926
    },
    {
      "id": "l1165-c21-c61",
      "origem": "c21",
      "destino": "c61",
      "distância": 577.634
    },
    {
      "id": "l1166-c40-c96",
      "origem": "c40",
      "destino": "c96",
      "distância": 474.905
    },
    {
      "id": "l1167-c2-c48",
      "origem": "c2",
      "destino": "c48",
      "distância": 383.55
    },
    {
      "id": "l1168-c88-c90",
      "origem": "c88",
      "destino": "c90",
      "distância": 313.598
    },
    {
      "id": "l1169-c37-c78",
      "origem": "c37",
      "destino": "c78",
      "distância": 323.119
    },
    {
      "id": "l1170-c17-c32",
      "origem": "c17",
      "destino": "c32",
      "distância": 369.781
    },
    {
      "id": "l1171-c10-c20",
      "origem": "c10",
      "destino": "c20",
      "distância": 574.621
    },
    {
      "id": "l1172-c6-c50",
      "origem": "c6",
      "destino": "c50",
      "distância": 297.398
    },
    {
      "id": "l1173-c23-c33",
      "origem": "c23",
      "destino": "c33",
      "distância": 113.667
    },
    {
      "id": "l1174-c26-c37",
      "origem": "c26",
      "destino": "c37",
      "distância": 179.62
    },
    {
      "id": "l1175-c44-c87",
      "origem": "c44",
      "destino": "c87",
      "distância": 261.175
    },
    {
      "id": "l1176-c22-c29",
      "origem": "c22",
      "destino": "c29",
      "distância": 542.762
    },
    {
      "id": "l1177-c16-c65",
      "origem": "c16",
      "destino": "c65",
      "distância": 430.661
    },
    {
      "id": "l1178-c70-c93",
      "origem": "c70",
      "destino": "c93",
      "distância": 141.746
    },
    {
      "id": "l1179-c47-c88",
      "origem": "c47",
      "destino": "c88",
      "distância": 133.323
    },
    {
      "id": "l1180-c2-c92",
      "origem": "c2",
      "destino": "c92",
      "distância": 434.674
    },
    {
      "id": "l1181-c31-c85",
      "origem": "c31",
      "destino": "c85",
      "distância": 478.936
    },
    {
      "id": "l1182-c64-c69",
      "origem": "c64",
      "destino": "c69",
      "distância": 551.051
    },
    {
      "id": "l1183-c6-c80",
      "origem": "c6",
      "destino": "c80",
      "distância": 368.282
    },
    {
      "id": "l1184-c41-c80",
      "origem": "c41",
      "destino": "c80",
      "distância": 194.261
    },
    {
      "id": "l1185-c40-c54",
      "origem": "c40",
      "destino": "c54",
      "distância": 239.866
    },
    {
      "id": "l1186-c5-c21",
      "origem": "c5",
      "destino": "c21",
      "distância": 323.778
    },
    {
      "id": "l1187-c62-c71",
      "origem": "c62",
      "destino": "c71",
      "distância": 158.68
    },
    {
      "id": "l1188-c15-c93",
      "origem": "c15",
      "destino": "c93",
      "distância": 103.527
    },
    {
      "id": "l1189-c32-c36",
      "origem": "c32",
      "destino": "c36",
      "distância": 242.724
    },
    {
      "id": "l1190-c91-c94",
      "origem": "c91",
      "destino": "c94",
      "distância": 11.352
    },
    {
      "id": "l1191-c33-c83",
      "origem": "c33",
      "destino": "c83",
      "distância": 296.449
    },
    {
      "id": "l1192-c52-c60",
      "origem": "c52",
      "destino": "c60",
      "distância": 245.732
    },
    {
      "id": "l1193-c86-c92",
      "origem": "c86",
      "destino": "c92",
      "distância": 508.748
    },
    {
      "id": "l1194-c11-c38",
      "origem": "c11",
      "destino": "c38",
      "distância": 196.265
    },
    {
      "id": "l1195-c4-c32",
      "origem": "c4",
      "destino": "c32",
      "distância": 46.159
    },
    {
      "id": "l1196-c28-c50",
      "origem": "c28",
      "destino": "c50",
      "distância": 31.856
    },
    {
      "id": "l1197-c15-c96",
      "origem": "c15",
      "destino": "c96",
      "distância": 426.462
    },
    {
      "id": "l1198-c18-c43",
      "origem": "c18",
      "destino": "c43",
      "distância": 406.118
    },
    {
      "id": "l1199-c3-c24",
      "origem": "c3",
      "destino": "c24",
      "distância": 217.431
    },
    {
      "id": "l1200-c42-c96",
      "origem": "c42",
      "destino": "c96",
      "distância": 289.968
    },
    {
      "id": "l1201-c27-c71",
      "origem": "c27",
      "destino": "c71",
      "distância": 424.175
    },
    {
      "id": "l1202-c35-c62",
      "origem": "c35",
      "destino": "c62",
      "distância": 537.804
    },
    {
      "id": "l1203-c3-c46",
      "origem": "c3",
      "destino": "c46",
      "distância": 120.306
    },
    {
      "id": "l1204-c60-c62",
      "origem": "c60",
      "destino": "c62",
      "distância": 259.059
    },
    {
      "id": "l1205-c44-c70",
      "origem": "c44",
      "destino": "c70",
      "distância": 130.7
    },
    {
      "id": "l1206-c8-c77",
      "origem": "c8",
      "destino": "c77",
      "distância": 557.278
    },
    {
      "id": "l1207-c11-c51",
      "origem": "c11",
      "destino": "c51",
      "distância": 567.307
    },
    {
      "id": "l1208-c3-c52",
      "origem": "c3",
      "destino": "c52",
      "distância": 175.795
    },
    {
      "id": "l1209-c4-c50",
      "origem": "c4",
      "destino": "c50",
      "distância": 243.676
    },
    {
      "id": "l1210-c61-c63",
      "origem": "c61",
      "destino": "c63",
      "distância": 458.297
    },
    {
      "id": "l1211-c7-c41",
      "origem": "c7",
      "destino": "c41",
      "distância": 448.308
    },
    {
      "id": "l1212-c13-c15",
      "origem": "c13",
      "destino": "c15",
      "distância": 108.645
    },
    {
      "id": "l1213-c4-c58",
      "origem": "c4",
      "destino": "c58",
      "distância": 193.321
    },
    {
      "id": "l1214-c73-c81",
      "origem": "c73",
      "destino": "c81",
      "distância": 595.042
    },
    {
      "id": "l1215-c17-c92",
      "origem": "c17",
      "destino": "c92",
      "distância": 482.673
    },
    {
      "id": "l1216-c36-c91",
      "origem": "c36",
      "destino": "c91",
      "distância": 195.662
    },
    {
      "id": "l1217-c34-c68",
      "origem": "c34",
      "destino": "c68",
      "distância": 399.582
    },
    {
      "id": "l1218-c76-c96",
      "origem": "c76",
      "destino": "c96",
      "distância": 244.024
    },
    {
      "id": "l1219-c6-c87",
      "origem": "c6",
      "destino": "c87",
      "distância": 473.772
    },
    {
      "id": "l1220-c23-c35",
      "origem": "c23",
      "destino": "c35",
      "distância": 482.415
    },
    {
      "id": "l1221-c25-c46",
      "origem": "c25",
      "destino": "c46",
      "distância": 457.258
    },
    {
      "id": "l1222-c57-c65",
      "origem": "c57",
      "destino": "c65",
      "distância": 523.299
    },
    {
      "id": "l1223-c8-c84",
      "origem": "c8",
      "destino": "c84",
      "distância": 331.276
    },
    {
      "id": "l1224-c35-c39",
      "origem": "c35",
      "destino": "c39",
      "distância": 370.746
    },
    {
      "id": "l1225-c20-c85",
      "origem": "c20",
      "destino": "c85",
      "distância": 380.142
    },
    {
      "id": "l1226-c75-c82",
      "origem": "c75",
      "destino": "c82",
      "distância": 572.567
    },
    {
      "id": "l1227-c43-c65",
      "origem": "c43",
      "destino": "c65",
      "distância": 165.459
    },
    {
      "id": "l1228-c68-c76",
      "origem": "c68",
      "destino": "c76",
      "distância": 40.49
    },
    {
      "id": "l1229-c16-c47",
      "origem": "c16",
      "destino": "c47",
      "distância": 240.773
    },
    {
      "id": "l1230-c13-c21",
      "origem": "c13",
      "destino": "c21",
      "distância": 423.137
    },
    {
      "id": "l1231-c10-c66",
      "origem": "c10",
      "destino": "c66",
      "distância": 478.146
    },
    {
      "id": "l1232-c78-c100",
      "origem": "c78",
      "destino": "c100",
      "distância": 77.419
    },
    {
      "id": "l1233-c25-c96",
      "origem": "c25",
      "destino": "c96",
      "distância": 426.456
    },
    {
      "id": "l1234-c5-c46",
      "origem": "c5",
      "destino": "c46",
      "distância": 283.581
    },
    {
      "id": "l1235-c78-c91",
      "origem": "c78",
      "destino": "c91",
      "distância": 342.899
    },
    {
      "id": "l1236-c76-c98",
      "origem": "c76",
      "destino": "c98",
      "distância": 23.405
    },
    {
      "id": "l1237-c1-c51",
      "origem": "c1",
      "destino": "c51",
      "distância": 441.67
    },
    {
      "id": "l1238-c52-c86",
      "origem": "c52",
      "destino": "c86",
      "distância": 208.627
    },
    {
      "id": "l1239-c87-c91",
      "origem": "c87",
      "destino": "c91",
      "distância": 512.034
    },
    {
      "id": "l1240-c3-c81",
      "origem": "c3",
      "destino": "c81",
      "distância": 505.997
    },
    {
      "id": "l1241-c16-c34",
      "origem": "c16",
      "destino": "c34",
      "distância": 46.888
    },
    {
      "id": "l1242-c14-c80",
      "origem": "c14",
      "destino": "c80",
      "distância": 152.45
    },
    {
      "id": "l1243-c21-c24",
      "origem": "c21",
      "destino": "c24",
      "distância": 311.676
    },
    {
      "id": "l1244-c53-c65",
      "origem": "c53",
      "destino": "c65",
      "distância": 406.842
    },
    {
      "id": "l1245-c38-c97",
      "origem": "c38",
      "destino": "c97",
      "distância": 100.531
    },
    {
      "id": "l1246-c54-c60",
      "origem": "c54",
      "destino": "c60",
      "distância": 299.196
    },
    {
      "id": "l1247-c59-c77",
      "origem": "c59",
      "destino": "c77",
      "distância": 458.351
    },
    {
      "id": "l1248-c25-c71",
      "origem": "c25",
      "destino": "c71",
      "distância": 291.876
    },
    {
      "id": "l1249-c52-c78",
      "origem": "c52",
      "destino": "c78",
      "distância": 160.361
    },
    {
      "id": "l1250-c13-c79",
      "origem": "c13",
      "destino": "c79",
      "distância": 391.505
    },
    {
      "id": "l1251-c22-c88",
      "origem": "c22",
      "destino": "c88",
      "distância": 375.843
    },
    {
      "id": "l1252-c13-c52",
      "origem": "c13",
      "destino": "c52",
      "distância": 500.855
    },
    {
      "id": "l1253-c10-c42",
      "origem": "c10",
      "destino": "c42",
      "distância": 281.911
    },
    {
      "id": "l1254-c18-c74",
      "origem": "c18",
      "destino": "c74",
      "distância": 584.681
    },
    {
      "id": "l1255-c4-c39",
      "origem": "c4",
      "destino": "c39",
      "distância": 327.591
    },
    {
      "id": "l1256-c38-c93",
      "origem": "c38",
      "destino": "c93",
      "distância": 530.367
    },
    {
      "id": "l1257-c35-c71",
      "origem": "c35",
      "destino": "c71",
      "distância": 207.7
    },
    {
      "id": "l1258-c27-c79",
      "origem": "c27",
      "destino": "c79",
      "distância": 305.447
    },
    {
      "id": "l1259-c19-c35",
      "origem": "c19",
      "destino": "c35",
      "distância": 465.785
    },
    {
      "id": "l1260-c28-c66",
      "origem": "c28",
      "destino": "c66",
      "distância": 43.491
    },
    {
      "id": "l1261-c25-c95",
      "origem": "c25",
      "destino": "c95",
      "distância": 243.736
    },
    {
      "id": "l1262-c44-c68",
      "origem": "c44",
      "destino": "c68",
      "distância": 90.663
    },
    {
      "id": "l1263-c42-c44",
      "origem": "c42",
      "destino": "c44",
      "distância": 256.984
    },
    {
      "id": "l1264-c21-c48",
      "origem": "c21",
      "destino": "c48",
      "distância": 447.326
    },
    {
      "id": "l1265-c48-c70",
      "origem": "c48",
      "destino": "c70",
      "distância": 332.562
    },
    {
      "id": "l1266-c46-c61",
      "origem": "c46",
      "destino": "c61",
      "distância": 22.409
    },
    {
      "id": "l1267-c12-c59",
      "origem": "c12",
      "destino": "c59",
      "distância": 427.333
    },
    {
      "id": "l1268-c25-c77",
      "origem": "c25",
      "destino": "c77",
      "distância": 398.659
    },
    {
      "id": "l1269-c75-c89",
      "origem": "c75",
      "destino": "c89",
      "distância": 326.878
    },
    {
      "id": "l1270-c19-c76",
      "origem": "c19",
      "destino": "c76",
      "distância": 146.226
    },
    {
      "id": "l1271-c52-c70",
      "origem": "c52",
      "destino": "c70",
      "distância": 162.921
    },
    {
      "id": "l1272-c64-c89",
      "origem": "c64",
      "destino": "c89",
      "distância": 437.101
    },
    {
      "id": "l1273-c46-c92",
      "origem": "c46",
      "destino": "c92",
      "distância": 111.344
    },
    {
      "id": "l1274-c54-c76",
      "origem": "c54",
      "destino": "c76",
      "distância": 488.015
    },
    {
      "id": "l1275-c60-c79",
      "origem": "c60",
      "destino": "c79",
      "distância": 31.931
    },
    {
      "id": "l1276-c22-c69",
      "origem": "c22",
      "destino": "c69",
      "distância": 394.336
    },
    {
      "id": "l1277-c28-c99",
      "origem": "c28",
      "destino": "c99",
      "distância": 298.508
    },
    {
      "id": "l1278-c35-c59",
      "origem": "c35",
      "destino": "c59",
      "distância": 447.097
    },
    {
      "id": "l1279-c3-c58",
      "origem": "c3",
      "destino": "c58",
      "distância": 264.573
    },
    {
      "id": "l1280-c14-c58",
      "origem": "c14",
      "destino": "c58",
      "distância": 473.366
    },
    {
      "id": "l1281-c14-c24",
      "origem": "c14",
      "destino": "c24",
      "distância": 500.636
    },
    {
      "id": "l1282-c50-c84",
      "origem": "c50",
      "destino": "c84",
      "distância": 92.336
    },
    {
      "id": "l1283-c56-c95",
      "origem": "c56",
      "destino": "c95",
      "distância": 468.22
    },
    {
      "id": "l1284-c3-c65",
      "origem": "c3",
      "destino": "c65",
      "distância": 591.363
    },
    {
      "id": "l1285-c33-c53",
      "origem": "c33",
      "destino": "c53",
      "distância": 409.125
    },
    {
      "id": "l1286-c25-c70",
      "origem": "c25",
      "destino": "c70",
      "distância": 457.708
    },
    {
      "id": "l1287-c39-c67",
      "origem": "c39",
      "destino": "c67",
      "distância": 244.802
    },
    {
      "id": "l1288-c30-c49",
      "origem": "c30",
      "destino": "c49",
      "distância": 402.606
    },
    {
      "id": "l1289-c43-c84",
      "origem": "c43",
      "destino": "c84",
      "distância": 452.643
    },
    {
      "id": "l1290-c34-c93",
      "origem": "c34",
      "destino": "c93",
      "distância": 254.558
    },
    {
      "id": "l1291-c26-c44",
      "origem": "c26",
      "destino": "c44",
      "distância": 181.246
    },
    {
      "id": "l1292-c39-c47",
      "origem": "c39",
      "destino": "c47",
      "distância": 187.526
    },
    {
      "id": "l1293-c6-c35",
      "origem": "c6",
      "destino": "c35",
      "distância": 156.975
    },
    {
      "id": "l1294-c50-c73",
      "origem": "c50",
      "destino": "c73",
      "distância": 247.605
    },
    {
      "id": "l1295-c85-c87",
      "origem": "c85",
      "destino": "c87",
      "distância": 17.072
    },
    {
      "id": "l1296-c8-c98",
      "origem": "c8",
      "destino": "c98",
      "distância": 234.881
    },
    {
      "id": "l1297-c35-c78",
      "origem": "c35",
      "destino": "c78",
      "distância": 369.846
    },
    {
      "id": "l1298-c16-c53",
      "origem": "c16",
      "destino": "c53",
      "distância": 411.892
    },
    {
      "id": "l1299-c25-c51",
      "origem": "c25",
      "destino": "c51",
      "distância": 33.873
    },
    {
      "id": "l1300-c87-c88",
      "origem": "c87",
      "destino": "c88",
      "distância": 16.583
    },
    {
      "id": "l1301-c9-c58",
      "origem": "c9",
      "destino": "c58",
      "distância": 192.403
    },
    {
      "id": "l1302-c46-c78",
      "origem": "c46",
      "destino": "c78",
      "distância": 495.643
    },
    {
      "id": "l1303-c73-c91",
      "origem": "c73",
      "destino": "c91",
      "distância": 16.882
    },
    {
      "id": "l1304-c71-c74",
      "origem": "c71",
      "destino": "c74",
      "distância": 401.458
    },
    {
      "id": "l1305-c34-c55",
      "origem": "c34",
      "destino": "c55",
      "distância": 345.375
    },
    {
      "id": "l1306-c53-c56",
      "origem": "c53",
      "destino": "c56",
      "distância": 512.362
    },
    {
      "id": "l1307-c48-c51",
      "origem": "c48",
      "destino": "c51",
      "distância": 441.242
    },
    {
      "id": "l1308-c12-c87",
      "origem": "c12",
      "destino": "c87",
      "distância": 77.175
    },
    {
      "id": "l1309-c24-c53",
      "origem": "c24",
      "destino": "c53",
      "distância": 264.751
    },
    {
      "id": "l1310-c3-c77",
      "origem": "c3",
      "destino": "c77",
      "distância": 355.219
    },
    {
      "id": "l1311-c39-c59",
      "origem": "c39",
      "destino": "c59",
      "distância": 498.253
    },
    {
      "id": "l1312-c6-c54",
      "origem": "c6",
      "destino": "c54",
      "distância": 409.792
    },
    {
      "id": "l1313-c1-c61",
      "origem": "c1",
      "destino": "c61",
      "distância": 414.787
    },
    {
      "id": "l1314-c32-c92",
      "origem": "c32",
      "destino": "c92",
      "distância": 416.146
    },
    {
      "id": "l1315-c16-c85",
      "origem": "c16",
      "destino": "c85",
      "distância": 162.46
    },
    {
      "id": "l1316-c53-c63",
      "origem": "c53",
      "destino": "c63",
      "distância": 577.042
    },
    {
      "id": "l1317-c49-c88",
      "origem": "c49",
      "destino": "c88",
      "distância": 490.074
    },
    {
      "id": "l1318-c34-c81",
      "origem": "c34",
      "destino": "c81",
      "distância": 25.292
    },
    {
      "id": "l1319-c20-c89",
      "origem": "c20",
      "destino": "c89",
      "distância": 449.007
    },
    {
      "id": "l1320-c26-c43",
      "origem": "c26",
      "destino": "c43",
      "distância": 144.432
    },
    {
      "id": "l1321-c22-c96",
      "origem": "c22",
      "destino": "c96",
      "distância": 452.112
    },
    {
      "id": "l1322-c3-c13",
      "origem": "c3",
      "destino": "c13",
      "distância": 185.663
    },
    {
      "id": "l1323-c24-c77",
      "origem": "c24",
      "destino": "c77",
      "distância": 121.182
    },
    {
      "id": "l1324-c61-c70",
      "origem": "c61",
      "destino": "c70",
      "distância": 529.787
    },
    {
      "id": "l1325-c47-c49",
      "origem": "c47",
      "destino": "c49",
      "distância": 92.201
    },
    {
      "id": "l1326-c34-c98",
      "origem": "c34",
      "destino": "c98",
      "distância": 112.086
    },
    {
      "id": "l1327-c40-c98",
      "origem": "c40",
      "destino": "c98",
      "distância": 481.146
    },
    {
      "id": "l1328-c21-c49",
      "origem": "c21",
      "destino": "c49",
      "distância": 251.776
    },
    {
      "id": "l1329-c50-c68",
      "origem": "c50",
      "destino": "c68",
      "distância": 567.482
    },
    {
      "id": "l1330-c34-c38",
      "origem": "c34",
      "destino": "c38",
      "distância": 137.582
    },
    {
      "id": "l1331-c79-c89",
      "origem": "c79",
      "destino": "c89",
      "distância": 319.822
    },
    {
      "id": "l1332-c3-c34",
      "origem": "c3",
      "destino": "c34",
      "distância": 242.409
    },
    {
      "id": "l1333-c37-c46",
      "origem": "c37",
      "destino": "c46",
      "distância": 446.282
    },
    {
      "id": "l1334-c17-c97",
      "origem": "c17",
      "destino": "c97",
      "distância": 427.812
    },
    {
      "id": "l1335-c30-c59",
      "origem": "c30",
      "destino": "c59",
      "distância": 589.322
    },
    {
      "id": "l1336-c40-c43",
      "origem": "c40",
      "destino": "c43",
      "distância": 579.927
    },
    {
      "id": "l1337-c77-c87",
      "origem": "c77",
      "destino": "c87",
      "distância": 561.707
    },
    {
      "id": "l1338-c9-c94",
      "origem": "c9",
      "destino": "c94",
      "distância": 74.951
    },
    {
      "id": "l1339-c39-c71",
      "origem": "c39",
      "destino": "c71",
      "distância": 413.216
    },
    {
      "id": "l1340-c45-c78",
      "origem": "c45",
      "destino": "c78",
      "distância": 346.634
    },
    {
      "id": "l1341-c48-c49",
      "origem": "c48",
      "destino": "c49",
      "distância": 251.728
    },
    {
      "id": "l1342-c9-c17",
      "origem": "c9",
      "destino": "c17",
      "distância": 40.691
    },
    {
      "id": "l1343-c72-c92",
      "origem": "c72",
      "destino": "c92",
      "distância": 492.148
    },
    {
      "id": "l1344-c79-c94",
      "origem": "c79",
      "destino": "c94",
      "distância": 291.46
    },
    {
      "id": "l1345-c66-c95",
      "origem": "c66",
      "destino": "c95",
      "distância": 431.398
    },
    {
      "id": "l1346-c9-c65",
      "origem": "c9",
      "destino": "c65",
      "distância": 142.091
    },
    {
      "id": "l1347-c67-c79",
      "origem": "c67",
      "destino": "c79",
      "distância": 273.583
    },
    {
      "id": "l1348-c69-c77",
      "origem": "c69",
      "destino": "c77",
      "distância": 99.604
    },
    {
      "id": "l1349-c22-c34",
      "origem": "c22",
      "destino": "c34",
      "distância": 265.493
    },
    {
      "id": "l1350-c65-c76",
      "origem": "c65",
      "destino": "c76",
      "distância": 155.2
    },
    {
      "id": "l1351-c24-c80",
      "origem": "c24",
      "destino": "c80",
      "distância": 407.597
    },
    {
      "id": "l1352-c47-c91",
      "origem": "c47",
      "destino": "c91",
      "distância": 308.771
    },
    {
      "id": "l1353-c63-c79",
      "origem": "c63",
      "destino": "c79",
      "distância": 279.774
    },
    {
      "id": "l1354-c70-c89",
      "origem": "c70",
      "destino": "c89",
      "distância": 250.302
    },
    {
      "id": "l1355-c15-c57",
      "origem": "c15",
      "destino": "c57",
      "distância": 395.615
    },
    {
      "id": "l1356-c60-c81",
      "origem": "c60",
      "destino": "c81",
      "distância": 581.912
    },
    {
      "id": "l1357-c25-c65",
      "origem": "c25",
      "destino": "c65",
      "distância": 305.769
    },
    {
      "id": "l1358-c21-c47",
      "origem": "c21",
      "destino": "c47",
      "distância": 594.581
    },
    {
      "id": "l1359-c5-c41",
      "origem": "c5",
      "destino": "c41",
      "distância": 241.284
    },
    {
      "id": "l1360-c71-c95",
      "origem": "c71",
      "destino": "c95",
      "distância": 573.537
    },
    {
      "id": "l1361-c47-c58",
      "origem": "c47",
      "destino": "c58",
      "distância": 445.625
    },
    {
      "id": "l1362-c63-c73",
      "origem": "c63",
      "destino": "c73",
      "distância": 308.83
    },
    {
      "id": "l1363-c21-c85",
      "origem": "c21",
      "destino": "c85",
      "distância": 453.092
    },
    {
      "id": "l1364-c55-c95",
      "origem": "c55",
      "destino": "c95",
      "distância": 222.152
    },
    {
      "id": "l1365-c36-c41",
      "origem": "c36",
      "destino": "c41",
      "distância": 190.625
    },
    {
      "id": "l1366-c7-c95",
      "origem": "c7",
      "destino": "c95",
      "distância": 470.448
    },
    {
      "id": "l1367-c1-c31",
      "origem": "c1",
      "destino": "c31",
      "distância": 448.522
    },
    {
      "id": "l1368-c57-c94",
      "origem": "c57",
      "destino": "c94",
      "distância": 308.482
    },
    {
      "id": "l1369-c9-c93",
      "origem": "c9",
      "destino": "c93",
      "distância": 446.684
    },
    {
      "id": "l1370-c63-c67",
      "origem": "c63",
      "destino": "c67",
      "distância": 425.361
    },
    {
      "id": "l1371-c38-c47",
      "origem": "c38",
      "destino": "c47",
      "distância": 492.041
    },
    {
      "id": "l1372-c62-c90",
      "origem": "c62",
      "destino": "c90",
      "distância": 466.234
    },
    {
      "id": "l1373-c58-c60",
      "origem": "c58",
      "destino": "c60",
      "distância": 22.355
    },
    {
      "id": "l1374-c17-c63",
      "origem": "c17",
      "destino": "c63",
      "distância": 333.454
    },
    {
      "id": "l1375-c1-c62",
      "origem": "c1",
      "destino": "c62",
      "distância": 62.744
    },
    {
      "id": "l1376-c25-c31",
      "origem": "c25",
      "destino": "c31",
      "distância": 22.051
    },
    {
      "id": "l1377-c31-c73",
      "origem": "c31",
      "destino": "c73",
      "distância": 432.718
    },
    {
      "id": "l1378-c62-c85",
      "origem": "c62",
      "destino": "c85",
      "distância": 307.181
    },
    {
      "id": "l1379-c74-c90",
      "origem": "c74",
      "destino": "c90",
      "distância": 397.608
    },
    {
      "id": "l1380-c91-c98",
      "origem": "c91",
      "destino": "c98",
      "distância": 208.693
    },
    {
      "id": "l1381-c19-c91",
      "origem": "c19",
      "destino": "c91",
      "distância": 505.766
    },
    {
      "id": "l1382-c22-c71",
      "origem": "c22",
      "destino": "c71",
      "distância": 290.956
    },
    {
      "id": "l1383-c11-c55",
      "origem": "c11",
      "destino": "c55",
      "distância": 465.926
    },
    {
      "id": "l1384-c41-c75",
      "origem": "c41",
      "destino": "c75",
      "distância": 518.588
    },
    {
      "id": "l1385-c7-c78",
      "origem": "c7",
      "destino": "c78",
      "distância": 238.992
    },
    {
      "id": "l1386-c56-c77",
      "origem": "c56",
      "destino": "c77",
      "distância": 434.026
    },
    {
      "id": "l1387-c51-c55",
      "origem": "c51",
      "destino": "c55",
      "distância": 510.305
    },
    {
      "id": "l1388-c7-c89",
      "origem": "c7",
      "destino": "c89",
      "distância": 437.128
    },
    {
      "id": "l1389-c85-c93",
      "origem": "c85",
      "destino": "c93",
      "distância": 64.13
    },
    {
      "id": "l1390-c31-c88",
      "origem": "c31",
      "destino": "c88",
      "distância": 439.083
    },
    {
      "id": "l1391-c24-c83",
      "origem": "c24",
      "destino": "c83",
      "distância": 41.156
    },
    {
      "id": "l1392-c1-c74",
      "origem": "c1",
      "destino": "c74",
      "distância": 542.986
    },
    {
      "id": "l1393-c65-c77",
      "origem": "c65",
      "destino": "c77",
      "distância": 485.334
    },
    {
      "id": "l1394-c46-c87",
      "origem": "c46",
      "destino": "c87",
      "distância": 441.592
    },
    {
      "id": "l1395-c66-c92",
      "origem": "c66",
      "destino": "c92",
      "distância": 130.865
    },
    {
      "id": "l1396-c56-c100",
      "origem": "c56",
      "destino": "c100",
      "distância": 506.432
    },
    {
      "id": "l1397-c12-c35",
      "origem": "c12",
      "destino": "c35",
      "distância": 373.99
    },
    {
      "id": "l1398-c52-c84",
      "origem": "c52",
      "destino": "c84",
      "distância": 77.457
    },
    {
      "id": "l1399-c6-c95",
      "origem": "c6",
      "destino": "c95",
      "distância": 340.239
    },
    {
      "id": "l1400-c17-c39",
      "origem": "c17",
      "destino": "c39",
      "distância": 570.162
    },
    {
      "id": "l1401-c23-c78",
      "origem": "c23",
      "destino": "c78",
      "distância": 347.57
    },
    {
      "id": "l1402-c24-c33",
      "origem": "c24",
      "destino": "c33",
      "distância": 377.888
    },
    {
      "id": "l1403-c31-c76",
      "origem": "c31",
      "destino": "c76",
      "distância": 123.475
    },
    {
      "id": "l1404-c6-c60",
      "origem": "c6",
      "destino": "c60",
      "distância": 456.531
    },
    {
      "id": "l1405-c38-c82",
      "origem": "c38",
      "destino": "c82",
      "distância": 502.726
    },
    {
      "id": "l1406-c16-c39",
      "origem": "c16",
      "destino": "c39",
      "distância": 131.412
    },
    {
      "id": "l1407-c31-c36",
      "origem": "c31",
      "destino": "c36",
      "distância": 369.907
    },
    {
      "id": "l1408-c74-c88",
      "origem": "c74",
      "destino": "c88",
      "distância": 153.014
    },
    {
      "id": "l1409-c65-c72",
      "origem": "c65",
      "destino": "c72",
      "distância": 471.041
    },
    {
      "id": "l1410-c1-c10",
      "origem": "c1",
      "destino": "c10",
      "distância": 415.183
    },
    {
      "id": "l1411-c21-c56",
      "origem": "c21",
      "destino": "c56",
      "distância": 366.761
    },
    {
      "id": "l1412-c31-c52",
      "origem": "c31",
      "destino": "c52",
      "distância": 127.116
    },
    {
      "id": "l1413-c29-c37",
      "origem": "c29",
      "destino": "c37",
      "distância": 595.312
    },
    {
      "id": "l1414-c23-c30",
      "origem": "c23",
      "destino": "c30",
      "distância": 447.371
    },
    {
      "id": "l1415-c34-c52",
      "origem": "c34",
      "destino": "c52",
      "distância": 588.278
    },
    {
      "id": "l1416-c38-c61",
      "origem": "c38",
      "destino": "c61",
      "distância": 281.133
    },
    {
      "id": "l1417-c13-c80",
      "origem": "c13",
      "destino": "c80",
      "distância": 390.213
    },
    {
      "id": "l1418-c55-c65",
      "origem": "c55",
      "destino": "c65",
      "distância": 61.709
    },
    {
      "id": "l1419-c20-c44",
      "origem": "c20",
      "destino": "c44",
      "distância": 563.615
    },
    {
      "id": "l1420-c18-c77",
      "origem": "c18",
      "destino": "c77",
      "distância": 79.487
    },
    {
      "id": "l1421-c12-c32",
      "origem": "c12",
      "destino": "c32",
      "distância": 448.03
    },
    {
      "id": "l1422-c7-c12",
      "origem": "c7",
      "destino": "c12",
      "distância": 437.411
    },
    {
      "id": "l1423-c60-c100",
      "origem": "c60",
      "destino": "c100",
      "distância": 532.911
    },
    {
      "id": "l1424-c18-c54",
      "origem": "c18",
      "destino": "c54",
      "distância": 466.234
    },
    {
      "id": "l1425-c22-c77",
      "origem": "c22",
      "destino": "c77",
      "distância": 398.566
    },
    {
      "id": "l1426-c46-c47",
      "origem": "c46",
      "destino": "c47",
      "distância": 335.884
    },
    {
      "id": "l1427-c7-c48",
      "origem": "c7",
      "destino": "c48",
      "distância": 511.558
    },
    {
      "id": "l1428-c41-c53",
      "origem": "c41",
      "destino": "c53",
      "distância": 131.126
    },
    {
      "id": "l1429-c30-c48",
      "origem": "c30",
      "destino": "c48",
      "distância": 553.974
    },
    {
      "id": "l1430-c25-c81",
      "origem": "c25",
      "destino": "c81",
      "distância": 384.053
    },
    {
      "id": "l1431-c49-c82",
      "origem": "c49",
      "destino": "c82",
      "distância": 357.373
    },
    {
      "id": "l1432-c68-c86",
      "origem": "c68",
      "destino": "c86",
      "distância": 518.137
    },
    {
      "id": "l1433-c18-c35",
      "origem": "c18",
      "destino": "c35",
      "distância": 71.262
    },
    {
      "id": "l1434-c31-c69",
      "origem": "c31",
      "destino": "c69",
      "distância": 485.448
    },
    {
      "id": "l1435-c20-c46",
      "origem": "c20",
      "destino": "c46",
      "distância": 463.609
    },
    {
      "id": "l1436-c44-c69",
      "origem": "c44",
      "destino": "c69",
      "distância": 204.419
    },
    {
      "id": "l1437-c69-c96",
      "origem": "c69",
      "destino": "c96",
      "distância": 358.082
    },
    {
      "id": "l1438-c62-c73",
      "origem": "c62",
      "destino": "c73",
      "distância": 113.499
    },
    {
      "id": "l1439-c25-c34",
      "origem": "c25",
      "destino": "c34",
      "distância": 371.148
    },
    {
      "id": "l1440-c10-c11",
      "origem": "c10",
      "destino": "c11",
      "distância": 264.529
    },
    {
      "id": "l1441-c10-c36",
      "origem": "c10",
      "destino": "c36",
      "distância": 394.78
    },
    {
      "id": "l1442-c35-c36",
      "origem": "c35",
      "destino": "c36",
      "distância": 282.853
    },
    {
      "id": "l1443-c59-c94",
      "origem": "c59",
      "destino": "c94",
      "distância": 571.001
    },
    {
      "id": "l1444-c37-c91",
      "origem": "c37",
      "destino": "c91",
      "distância": 187.621
    },
    {
      "id": "l1445-c20-c96",
      "origem": "c20",
      "destino": "c96",
      "distância": 52.426
    },
    {
      "id": "l1446-c23-c40",
      "origem": "c23",
      "destino": "c40",
      "distância": 497.822
    },
    {
      "id": "l1447-c5-c23",
      "origem": "c5",
      "destino": "c23",
      "distância": 274.385
    },
    {
      "id": "l1448-c44-c93",
      "origem": "c44",
      "destino": "c93",
      "distância": 486.817
    },
    {
      "id": "l1449-c16-c77",
      "origem": "c16",
      "destino": "c77",
      "distância": 449.209
    },
    {
      "id": "l1450-c23-c91",
      "origem": "c23",
      "destino": "c91",
      "distância": 182.795
    },
    {
      "id": "l1451-c26-c89",
      "origem": "c26",
      "destino": "c89",
      "distância": 200.573
    },
    {
      "id": "l1452-c91-c93",
      "origem": "c91",
      "destino": "c93",
      "distância": 387.473
    },
    {
      "id": "l1453-c2-c24",
      "origem": "c2",
      "destino": "c24",
      "distância": 188.166
    },
    {
      "id": "l1454-c14-c23",
      "origem": "c14",
      "destino": "c23",
      "distância": 338.307
    },
    {
      "id": "l1455-c26-c64",
      "origem": "c26",
      "destino": "c64",
      "distância": 47.722
    },
    {
      "id": "l1456-c21-c36",
      "origem": "c21",
      "destino": "c36",
      "distância": 587.971
    },
    {
      "id": "l1457-c28-c86",
      "origem": "c28",
      "destino": "c86",
      "distância": 336.185
    },
    {
      "id": "l1458-c35-c53",
      "origem": "c35",
      "destino": "c53",
      "distância": 533.662
    },
    {
      "id": "l1459-c20-c22",
      "origem": "c20",
      "destino": "c22",
      "distância": 475.158
    },
    {
      "id": "l1460-c37-c100",
      "origem": "c37",
      "destino": "c100",
      "distância": 52.962
    },
    {
      "id": "l1461-c8-c23",
      "origem": "c8",
      "destino": "c23",
      "distância": 58.099
    },
    {
      "id": "l1462-c16-c87",
      "origem": "c16",
      "destino": "c87",
      "distância": 181.99
    },
    {
      "id": "l1463-c84-c97",
      "origem": "c84",
      "destino": "c97",
      "distância": 568.249
    },
    {
      "id": "l1464-c23-c67",
      "origem": "c23",
      "destino": "c67",
      "distância": 265.654
    },
    {
      "id": "l1465-c3-c16",
      "origem": "c3",
      "destino": "c16",
      "distância": 577.174
    },
    {
      "id": "l1466-c66-c98",
      "origem": "c66",
      "destino": "c98",
      "distância": 283.491
    },
    {
      "id": "l1467-c35-c56",
      "origem": "c35",
      "destino": "c56",
      "distância": 252.448
    },
    {
      "id": "l1468-c43-c82",
      "origem": "c43",
      "destino": "c82",
      "distância": 111.8
    },
    {
      "id": "l1469-c64-c96",
      "origem": "c64",
      "destino": "c96",
      "distância": 162.434
    },
    {
      "id": "l1470-c92-c93",
      "origem": "c92",
      "destino": "c93",
      "distância": 549.469
    },
    {
      "id": "l1471-c6-c86",
      "origem": "c6",
      "destino": "c86",
      "distância": 133.535
    },
    {
      "id": "l1472-c34-c65",
      "origem": "c34",
      "destino": "c65",
      "distância": 98.973
    },
    {
      "id": "l1473-c69-c95",
      "origem": "c69",
      "destino": "c95",
      "distância": 206.939
    },
    {
      "id": "l1474-c94-c95",
      "origem": "c94",
      "destino": "c95",
      "distância": 362.089
    },
    {
      "id": "l1475-c38-c83",
      "origem": "c38",
      "destino": "c83",
      "distância": 444.967
    },
    {
      "id": "l1476-c4-c63",
      "origem": "c4",
      "destino": "c63",
      "distância": 477.816
    },
    {
      "id": "l1477-c3-c88",
      "origem": "c3",
      "destino": "c88",
      "distância": 208.966
    },
    {
      "id": "l1478-c7-c58",
      "origem": "c7",
      "destino": "c58",
      "distância": 15.24
    },
    {
      "id": "l1479-c70-c87",
      "origem": "c70",
      "destino": "c87",
      "distância": 357.772
    },
    {
      "id": "l1480-c47-c68",
      "origem": "c47",
      "destino": "c68",
      "distância": 28.724
    },
    {
      "id": "l1481-c78-c98",
      "origem": "c78",
      "destino": "c98",
      "distância": 576.222
    },
    {
      "id": "l1482-c47-c60",
      "origem": "c47",
      "destino": "c60",
      "distância": 384.474
    },
    {
      "id": "l1483-c31-c61",
      "origem": "c31",
      "destino": "c61",
      "distância": 137.964
    },
    {
      "id": "l1484-c29-c32",
      "origem": "c29",
      "destino": "c32",
      "distância": 86.134
    },
    {
      "id": "l1485-c30-c75",
      "origem": "c30",
      "destino": "c75",
      "distância": 166.317
    },
    {
      "id": "l1486-c32-c40",
      "origem": "c32",
      "destino": "c40",
      "distância": 63.436
    },
    {
      "id": "l1487-c41-c61",
      "origem": "c41",
      "destino": "c61",
      "distância": 314.646
    },
    {
      "id": "l1488-c30-c99",
      "origem": "c30",
      "destino": "c99",
      "distância": 424.851
    },
    {
      "id": "l1489-c22-c25",
      "origem": "c22",
      "destino": "c25",
      "distância": 84.521
    },
    {
      "id": "l1490-c15-c44",
      "origem": "c15",
      "destino": "c44",
      "distância": 417.242
    },
    {
      "id": "l1491-c57-c78",
      "origem": "c57",
      "destino": "c78",
      "distância": 120.419
    },
    {
      "id": "l1492-c5-c44",
      "origem": "c5",
      "destino": "c44",
      "distância": 133.192
    },
    {
      "id": "l1493-c13-c35",
      "origem": "c13",
      "destino": "c35",
      "distância": 519.21
    },
    {
      "id": "l1494-c39-c97",
      "origem": "c39",
      "destino": "c97",
      "distância": 478.494
    },
    {
      "id": "l1495-c10-c88",
      "origem": "c10",
      "destino": "c88",
      "distância": 243.279
    },
    {
      "id": "l1496-c6-c98",
      "origem": "c6",
      "destino": "c98",
      "distância": 119.748
    },
    {
      "id": "l1497-c64-c66",
      "origem": "c64",
      "destino": "c66",
      "distância": 214.165
    },
    {
      "id": "l1498-c13-c63",
      "origem": "c13",
      "destino": "c63",
      "distância": 571.078
    },
    {
      "id": "l1499-c27-c63",
      "origem": "c27",
      "destino": "c63",
      "distância": 148.81
    },
    {
      "id": "l1500-c70-c77",
      "origem": "c70",
      "destino": "c77",
      "distância": 268.408
    },
    {
      "id": "l1501-c66-c74",
      "origem": "c66",
      "destino": "c74",
      "distância": 433.866
    },
    {
      "id": "l1502-c52-c54",
      "origem": "c52",
      "destino": "c54",
      "distância": 269.984
    },
    {
      "id": "l1503-c75-c92",
      "origem": "c75",
      "destino": "c92",
      "distância": 153.393
    },
    {
      "id": "l1504-c11-c57",
      "origem": "c11",
      "destino": "c57",
      "distância": 142.424
    },
    {
      "id": "l1505-c31-c83",
      "origem": "c31",
      "destino": "c83",
      "distância": 119.805
    },
    {
      "id": "l1506-c11-c82",
      "origem": "c11",
      "destino": "c82",
      "distância": 297.902
    },
    {
      "id": "l1507-c65-c75",
      "origem": "c65",
      "destino": "c75",
      "distância": 180.87
    },
    {
      "id": "l1508-c76-c92",
      "origem": "c76",
      "destino": "c92",
      "distância": 231.311
    },
    {
      "id": "l1509-c21-c77",
      "origem": "c21",
      "destino": "c77",
      "distância": 155.718
    },
    {
      "id": "l1510-c14-c78",
      "origem": "c14",
      "destino": "c78",
      "distância": 66.292
    },
    {
      "id": "l1511-c3-c57",
      "origem": "c3",
      "destino": "c57",
      "distância": 287.799
    },
    {
      "id": "l1512-c68-c93",
      "origem": "c68",
      "destino": "c93",
      "distância": 268.576
    },
    {
      "id": "l1513-c19-c73",
      "origem": "c19",
      "destino": "c73",
      "distância": 258.915
    },
    {
      "id": "l1514-c64-c97",
      "origem": "c64",
      "destino": "c97",
      "distância": 6.218
    },
    {
      "id": "l1515-c24-c59",
      "origem": "c24",
      "destino": "c59",
      "distância": 358.464
    },
    {
      "id": "l1516-c8-c79",
      "origem": "c8",
      "destino": "c79",
      "distância": 483.318
    },
    {
      "id": "l1517-c8-c44",
      "origem": "c8",
      "destino": "c44",
      "distância": 131.249
    },
    {
      "id": "l1518-c7-c36",
      "origem": "c7",
      "destino": "c36",
      "distância": 540.751
    },
    {
      "id": "l1519-c41-c95",
      "origem": "c41",
      "destino": "c95",
      "distância": 178.329
    },
    {
      "id": "l1520-c26-c58",
      "origem": "c26",
      "destino": "c58",
      "distância": 198.164
    },
    {
      "id": "l1521-c60-c64",
      "origem": "c60",
      "destino": "c64",
      "distância": 222.81
    },
    {
      "id": "l1522-c58-c94",
      "origem": "c58",
      "destino": "c94",
      "distância": 28.55
    },
    {
      "id": "l1523-c4-c87",
      "origem": "c4",
      "destino": "c87",
      "distância": 383.928
    },
    {
      "id": "l1524-c6-c97",
      "origem": "c6",
      "destino": "c97",
      "distância": 17.398
    },
    {
      "id": "l1525-c42-c63",
      "origem": "c42",
      "destino": "c63",
      "distância": 332.64
    },
    {
      "id": "l1526-c13-c69",
      "origem": "c13",
      "destino": "c69",
      "distância": 41.218
    },
    {
      "id": "l1527-c33-c92",
      "origem": "c33",
      "destino": "c92",
      "distância": 499.37
    },
    {
      "id": "l1528-c51-c85",
      "origem": "c51",
      "destino": "c85",
      "distância": 31.55
    },
    {
      "id": "l1529-c34-c78",
      "origem": "c34",
      "destino": "c78",
      "distância": 436.378
    },
    {
      "id": "l1530-c35-c57",
      "origem": "c35",
      "destino": "c57",
      "distância": 150.016
    },
    {
      "id": "l1531-c26-c77",
      "origem": "c26",
      "destino": "c77",
      "distância": 560.134
    },
    {
      "id": "l1532-c27-c76",
      "origem": "c27",
      "destino": "c76",
      "distância": 37.554
    },
    {
      "id": "l1533-c14-c89",
      "origem": "c14",
      "destino": "c89",
      "distância": 259.376
    },
    {
      "id": "l1534-c43-c56",
      "origem": "c43",
      "destino": "c56",
      "distância": 61.254
    },
    {
      "id": "l1535-c26-c87",
      "origem": "c26",
      "destino": "c87",
      "distância": 111.387
    },
    {
      "id": "l1536-c7-c97",
      "origem": "c7",
      "destino": "c97",
      "distância": 539.005
    },
    {
      "id": "l1537-c12-c42",
      "origem": "c12",
      "destino": "c42",
      "distância": 457.37
    },
    {
      "id": "l1538-c39-c58",
      "origem": "c39",
      "destino": "c58",
      "distância": 101.07
    },
    {
      "id": "l1539-c21-c97",
      "origem": "c21",
      "destino": "c97",
      "distância": 488.166
    },
    {
      "id": "l1540-c4-c77",
      "origem": "c4",
      "destino": "c77",
      "distância": 283.121
    },
    {
      "id": "l1541-c33-c45",
      "origem": "c33",
      "destino": "c45",
      "distância": 268.993
    },
    {
      "id": "l1542-c55-c61",
      "origem": "c55",
      "destino": "c61",
      "distância": 309.182
    },
    {
      "id": "l1543-c51-c71",
      "origem": "c51",
      "destino": "c71",
      "distância": 166.514
    },
    {
      "id": "l1544-c31-c81",
      "origem": "c31",
      "destino": "c81",
      "distância": 108.478
    },
    {
      "id": "l1545-c13-c34",
      "origem": "c13",
      "destino": "c34",
      "distância": 30.437
    },
    {
      "id": "l1546-c62-c96",
      "origem": "c62",
      "destino": "c96",
      "distância": 86.832
    },
    {
      "id": "l1547-c8-c24",
      "origem": "c8",
      "destino": "c24",
      "distância": 366.99
    },
    {
      "id": "l1548-c12-c92",
      "origem": "c12",
      "destino": "c92",
      "distância": 224.426
    },
    {
      "id": "l1549-c16-c97",
      "origem": "c16",
      "destino": "c97",
      "distância": 462.295
    },
    {
      "id": "l1550-c9-c66",
      "origem": "c9",
      "destino": "c66",
      "distância": 124.802
    },
    {
      "id": "l1551-c38-c39",
      "origem": "c38",
      "destino": "c39",
      "distância": 425.044
    },
    {
      "id": "l1552-c3-c82",
      "origem": "c3",
      "destino": "c82",
      "distância": 30.286
    },
    {
      "id": "l1553-c10-c75",
      "origem": "c10",
      "destino": "c75",
      "distância": 22.727
    },
    {
      "id": "l1554-c10-c55",
      "origem": "c10",
      "destino": "c55",
      "distância": 249.9
    },
    {
      "id": "l1555-c17-c45",
      "origem": "c17",
      "destino": "c45",
      "distância": 78.941
    },
    {
      "id": "l1556-c29-c51",
      "origem": "c29",
      "destino": "c51",
      "distância": 175.047
    },
    {
      "id": "l1557-c43-c97",
      "origem": "c43",
      "destino": "c97",
      "distância": 305.008
    },
    {
      "id": "l1558-c6-c64",
      "origem": "c6",
      "destino": "c64",
      "distância": 477.097
    },
    {
      "id": "l1559-c9-c32",
      "origem": "c9",
      "destino": "c32",
      "distância": 274.858
    },
    {
      "id": "l1560-c43-c96",
      "origem": "c43",
      "destino": "c96",
      "distância": 191.693
    },
    {
      "id": "l1561-c63-c83",
      "origem": "c63",
      "destino": "c83",
      "distância": 36.358
    },
    {
      "id": "l1562-c14-c64",
      "origem": "c14",
      "destino": "c64",
      "distância": 74.134
    },
    {
      "id": "l1563-c10-c28",
      "origem": "c10",
      "destino": "c28",
      "distância": 459.425
    },
    {
      "id": "l1564-c37-c88",
      "origem": "c37",
      "destino": "c88",
      "distância": 129.464
    },
    {
      "id": "l1565-c46-c83",
      "origem": "c46",
      "destino": "c83",
      "distância": 143.796
    },
    {
      "id": "l1566-c59-c76",
      "origem": "c59",
      "destino": "c76",
      "distância": 530.136
    },
    {
      "id": "l1567-c55-c73",
      "origem": "c55",
      "destino": "c73",
      "distância": 105.842
    },
    {
      "id": "l1568-c53-c87",
      "origem": "c53",
      "destino": "c87",
      "distância": 584.468
    },
    {
      "id": "l1569-c31-c35",
      "origem": "c31",
      "destino": "c35",
      "distância": 99.553
    },
    {
      "id": "l1570-c11-c40",
      "origem": "c11",
      "destino": "c40",
      "distância": 415.915
    },
    {
      "id": "l1571-c1-c70",
      "origem": "c1",
      "destino": "c70",
      "distância": 490.172
    },
    {
      "id": "l1572-c7-c47",
      "origem": "c7",
      "destino": "c47",
      "distância": 125.788
    },
    {
      "id": "l1573-c1-c17",
      "origem": "c1",
      "destino": "c17",
      "distância": 580.708
    },
    {
      "id": "l1574-c22-c82",
      "origem": "c22",
      "destino": "c82",
      "distância": 317.986
    },
    {
      "id": "l1575-c30-c56",
      "origem": "c30",
      "destino": "c56",
      "distância": 164.87
    },
    {
      "id": "l1576-c36-c83",
      "origem": "c36",
      "destino": "c83",
      "distância": 557.625
    },
    {
      "id": "l1577-c13-c65",
      "origem": "c13",
      "destino": "c65",
      "distância": 324.513
    },
    {
      "id": "l1578-c75-c83",
      "origem": "c75",
      "destino": "c83",
      "distância": 549.737
    },
    {
      "id": "l1579-c66-c82",
      "origem": "c66",
      "destino": "c82",
      "distância": 288.528
    },
    {
      "id": "l1580-c23-c26",
      "origem": "c23",
      "destino": "c26",
      "distância": 315.956
    },
    {
      "id": "l1581-c51-c61",
      "origem": "c51",
      "destino": "c61",
      "distância": 184.662
    },
    {
      "id": "l1582-c59-c96",
      "origem": "c59",
      "destino": "c96",
      "distância": 17.863
    },
    {
      "id": "l1583-c78-c90",
      "origem": "c78",
      "destino": "c90",
      "distância": 386.693
    },
    {
      "id": "l1584-c52-c79",
      "origem": "c52",
      "destino": "c79",
      "distância": 52.51
    },
    {
      "id": "l1585-c41-c62",
      "origem": "c41",
      "destino": "c62",
      "distância": 353.076
    },
    {
      "id": "l1586-c34-c49",
      "origem": "c34",
      "destino": "c49",
      "distância": 547.524
    },
    {
      "id": "l1587-c11-c22",
      "origem": "c11",
      "destino": "c22",
      "distância": 422.184
    },
    {
      "id": "l1588-c43-c83",
      "origem": "c43",
      "destino": "c83",
      "distância": 299.787
    },
    {
      "id": "l1589-c81-c83",
      "origem": "c81",
      "destino": "c83",
      "distância": 435.972
    },
    {
      "id": "l1590-c13-c89",
      "origem": "c13",
      "destino": "c89",
      "distância": 169.485
    },
    {
      "id": "l1591-c22-c93",
      "origem": "c22",
      "destino": "c93",
      "distância": 301.924
    },
    {
      "id": "l1592-c31-c57",
      "origem": "c31",
      "destino": "c57",
      "distância": 187.467
    },
    {
      "id": "l1593-c84-c86",
      "origem": "c84",
      "destino": "c86",
      "distância": 58.775
    },
    {
      "id": "l1594-c5-c89",
      "origem": "c5",
      "destino": "c89",
      "distância": 5.942
    },
    {
      "id": "l1595-c2-c73",
      "origem": "c2",
      "destino": "c73",
      "distância": 450.554
    },
    {
      "id": "l1596-c29-c72",
      "origem": "c29",
      "destino": "c72",
      "distância": 146.263
    },
    {
      "id": "l1597-c29-c45",
      "origem": "c29",
      "destino": "c45",
      "distância": 278.213
    },
    {
      "id": "l1598-c2-c26",
      "origem": "c2",
      "destino": "c26",
      "distância": 214.256
    },
    {
      "id": "l1599-c40-c94",
      "origem": "c40",
      "destino": "c94",
      "distância": 446.773
    },
    {
      "id": "l1600-c81-c90",
      "origem": "c81",
      "destino": "c90",
      "distância": 413.891
    },
    {
      "id": "l1601-c37-c42",
      "origem": "c37",
      "destino": "c42",
      "distância": 498.325
    },
    {
      "id": "l1602-c11-c16",
      "origem": "c11",
      "destino": "c16",
      "distância": 532.839
    },
    {
      "id": "l1603-c54-c57",
      "origem": "c54",
      "destino": "c57",
      "distância": 283.415
    },
    {
      "id": "l1604-c13-c30",
      "origem": "c13",
      "destino": "c30",
      "distância": 284.894
    },
    {
      "id": "l1605-c50-c53",
      "origem": "c50",
      "destino": "c53",
      "distância": 56.364
    },
    {
      "id": "l1606-c10-c39",
      "origem": "c10",
      "destino": "c39",
      "distância": 342.392
    },
    {
      "id": "l1607-c70-c81",
      "origem": "c70",
      "destino": "c81",
      "distância": 134.099
    },
    {
      "id": "l1608-c5-c67",
      "origem": "c5",
      "destino": "c67",
      "distância": 296.779
    },
    {
      "id": "l1609-c21-c30",
      "origem": "c21",
      "destino": "c30",
      "distância": 190.17
    },
    {
      "id": "l1610-c31-c64",
      "origem": "c31",
      "destino": "c64",
      "distância": 472.506
    },
    {
      "id": "l1611-c4-c92",
      "origem": "c4",
      "destino": "c92",
      "distância": 180.044
    },
    {
      "id": "l1612-c46-c49",
      "origem": "c46",
      "destino": "c49",
      "distância": 323.165
    },
    {
      "id": "l1613-c62-c68",
      "origem": "c62",
      "destino": "c68",
      "distância": 332.2
    },
    {
      "id": "l1614-c85-c99",
      "origem": "c85",
      "destino": "c99",
      "distância": 529.968
    },
    {
      "id": "l1615-c51-c69",
      "origem": "c51",
      "destino": "c69",
      "distância": 214.567
    },
    {
      "id": "l1616-c15-c22",
      "origem": "c15",
      "destino": "c22",
      "distância": 496.803
    },
    {
      "id": "l1617-c61-c90",
      "origem": "c61",
      "destino": "c90",
      "distância": 207.534
    },
    {
      "id": "l1618-c19-c38",
      "origem": "c19",
      "destino": "c38",
      "distância": 365.069
    },
    {
      "id": "l1619-c67-c88",
      "origem": "c67",
      "destino": "c88",
      "distância": 120.925
    },
    {
      "id": "l1620-c71-c73",
      "origem": "c71",
      "destino": "c73",
      "distância": 356.989
    },
    {
      "id": "l1621-c29-c63",
      "origem": "c29",
      "destino": "c63",
      "distância": 328.075
    },
    {
      "id": "l1622-c2-c4",
      "origem": "c2",
      "destino": "c4",
      "distância": 463.074
    },
    {
      "id": "l1623-c64-c70",
      "origem": "c64",
      "destino": "c70",
      "distância": 582.848
    },
    {
      "id": "l1624-c16-c82",
      "origem": "c16",
      "destino": "c82",
      "distância": 578.405
    },
    {
      "id": "l1625-c88-c94",
      "origem": "c88",
      "destino": "c94",
      "distância": 519.784
    },
    {
      "id": "l1626-c18-c80",
      "origem": "c18",
      "destino": "c80",
      "distância": 367.649
    },
    {
      "id": "l1627-c84-c100",
      "origem": "c84",
      "destino": "c100",
      "distância": 291.458
    },
    {
      "id": "l1628-c70-c83",
      "origem": "c70",
      "destino": "c83",
      "distância": 523.351
    },
    {
      "id": "l1629-c46-c66",
      "origem": "c46",
      "destino": "c66",
      "distância": 218.511
    },
    {
      "id": "l1630-c34-c69",
      "origem": "c34",
      "destino": "c69",
      "distância": 413.079
    },
    {
      "id": "l1631-c24-c44",
      "origem": "c24",
      "destino": "c44",
      "distância": 529.277
    },
    {
      "id": "l1632-c20-c67",
      "origem": "c20",
      "destino": "c67",
      "distância": 365.683
    },
    {
      "id": "l1633-c87-c92",
      "origem": "c87",
      "destino": "c92",
      "distância": 444.698
    },
    {
      "id": "l1634-c18-c21",
      "origem": "c18",
      "destino": "c21",
      "distância": 92.246
    },
    {
      "id": "l1635-c6-c12",
      "origem": "c6",
      "destino": "c12",
      "distância": 166.377
    },
    {
      "id": "l1636-c5-c47",
      "origem": "c5",
      "destino": "c47",
      "distância": 284.941
    },
    {
      "id": "l1637-c32-c93",
      "origem": "c32",
      "destino": "c93",
      "distância": 25.185
    },
    {
      "id": "l1638-c33-c44",
      "origem": "c33",
      "destino": "c44",
      "distância": 116.112
    },
    {
      "id": "l1639-c4-c46",
      "origem": "c4",
      "destino": "c46",
      "distância": 339.349
    },
    {
      "id": "l1640-c27-c55",
      "origem": "c27",
      "destino": "c55",
      "distância": 465.508
    },
    {
      "id": "l1641-c26-c76",
      "origem": "c26",
      "destino": "c76",
      "distância": 253.079
    },
    {
      "id": "l1642-c11-c58",
      "origem": "c11",
      "destino": "c58",
      "distância": 406.311
    },
    {
      "id": "l1643-c38-c100",
      "origem": "c38",
      "destino": "c100",
      "distância": 351.293
    },
    {
      "id": "l1644-c52-c58",
      "origem": "c52",
      "destino": "c58",
      "distância": 286.153
    },
    {
      "id": "l1645-c71-c90",
      "origem": "c71",
      "destino": "c90",
      "distância": 257.931
    },
    {
      "id": "l1646-c53-c57",
      "origem": "c53",
      "destino": "c57",
      "distância": 524.249
    },
    {
      "id": "l1647-c56-c66",
      "origem": "c56",
      "destino": "c66",
      "distância": 426.398
    },
    {
      "id": "l1648-c17-c88",
      "origem": "c17",
      "destino": "c88",
      "distância": 136.979
    },
    {
      "id": "l1649-c64-c87",
      "origem": "c64",
      "destino": "c87",
      "distância": 562.91
    },
    {
      "id": "l1650-c14-c98",
      "origem": "c14",
      "destino": "c98",
      "distância": 226.875
    },
    {
      "id": "l1651-c23-c79",
      "origem": "c23",
      "destino": "c79",
      "distância": 115.702
    },
    {
      "id": "l1652-c24-c61",
      "origem": "c24",
      "destino": "c61",
      "distância": 479.153
    },
    {
      "id": "l1653-c24-c27",
      "origem": "c24",
      "destino": "c27",
      "distância": 57.887
    },
    {
      "id": "l1654-c37-c56",
      "origem": "c37",
      "destino": "c56",
      "distância": 286.722
    },
    {
      "id": "l1655-c58-c70",
      "origem": "c58",
      "destino": "c70",
      "distância": 156.039
    },
    {
      "id": "l1656-c14-c86",
      "origem": "c14",
      "destino": "c86",
      "distância": 566.779
    },
    {
      "id": "l1657-c24-c39",
      "origem": "c24",
      "destino": "c39",
      "distância": 52.021
    },
    {
      "id": "l1658-c63-c100",
      "origem": "c63",
      "destino": "c100",
      "distância": 196.421
    },
    {
      "id": "l1659-c16-c50",
      "origem": "c16",
      "destino": "c50",
      "distância": 325.312
    },
    {
      "id": "l1660-c19-c57",
      "origem": "c19",
      "destino": "c57",
      "distância": 419.51
    },
    {
      "id": "l1661-c14-c77",
      "origem": "c14",
      "destino": "c77",
      "distância": 333.907
    },
    {
      "id": "l1662-c33-c51",
      "origem": "c33",
      "destino": "c51",
      "distância": 272.848
    },
    {
      "id": "l1663-c20-c39",
      "origem": "c20",
      "destino": "c39",
      "distância": 61.136
    },
    {
      "id": "l1664-c81-c98",
      "origem": "c81",
      "destino": "c98",
      "distância": 207.101
    },
    {
      "id": "l1665-c91-c99",
      "origem": "c91",
      "destino": "c99",
      "distância": 230.886
    },
    {
      "id": "l1666-c82-c89",
      "origem": "c82",
      "destino": "c89",
      "distância": 394.037
    },
    {
      "id": "l1667-c15-c39",
      "origem": "c15",
      "destino": "c39",
      "distância": 529.422
    },
    {
      "id": "l1668-c71-c87",
      "origem": "c71",
      "destino": "c87",
      "distância": 30.773
    },
    {
      "id": "l1669-c19-c64",
      "origem": "c19",
      "destino": "c64",
      "distância": 257.178
    },
    {
      "id": "l1670-c19-c100",
      "origem": "c19",
      "destino": "c100",
      "distância": 369.43
    },
    {
      "id": "l1671-c42-c49",
      "origem": "c42",
      "destino": "c49",
      "distância": 256.232
    },
    {
      "id": "l1672-c59-c73",
      "origem": "c59",
      "destino": "c73",
      "distância": 328.269
    },
    {
      "id": "l1673-c72-c75",
      "origem": "c72",
      "destino": "c75",
      "distância": 213.67
    },
    {
      "id": "l1674-c1-c40",
      "origem": "c1",
      "destino": "c40",
      "distância": 74.144
    },
    {
      "id": "l1675-c12-c48",
      "origem": "c12",
      "destino": "c48",
      "distância": 15.341
    },
    {
      "id": "l1676-c74-c96",
      "origem": "c74",
      "destino": "c96",
      "distância": 425.306
    },
    {
      "id": "l1677-c6-c7",
      "origem": "c6",
      "destino": "c7",
      "distância": 103.902
    },
    {
      "id": "l1678-c11-c12",
      "origem": "c11",
      "destino": "c12",
      "distância": 448.827
    },
    {
      "id": "l1679-c10-c58",
      "origem": "c10",
      "destino": "c58",
      "distância": 534.711
    },
    {
      "id": "l1680-c16-c63",
      "origem": "c16",
      "destino": "c63",
      "distância": 593.642
    },
    {
      "id": "l1681-c2-c99",
      "origem": "c2",
      "destino": "c99",
      "distância": 398.409
    },
    {
      "id": "l1682-c71-c100",
      "origem": "c71",
      "destino": "c100",
      "distância": 340.392
    },
    {
      "id": "l1683-c16-c57",
      "origem": "c16",
      "destino": "c57",
      "distância": 537.143
    },
    {
      "id": "l1684-c88-c92",
      "origem": "c88",
      "destino": "c92",
      "distância": 209.247
    },
    {
      "id": "l1685-c42-c100",
      "origem": "c42",
      "destino": "c100",
      "distância": 327.479
    },
    {
      "id": "l1686-c3-c80",
      "origem": "c3",
      "destino": "c80",
      "distância": 221.158
    },
    {
      "id": "l1687-c1-c78",
      "origem": "c1",
      "destino": "c78",
      "distância": 360.494
    },
    {
      "id": "l1688-c16-c17",
      "origem": "c16",
      "destino": "c17",
      "distância": 51.289
    },
    {
      "id": "l1689-c35-c73",
      "origem": "c35",
      "destino": "c73",
      "distância": 173.321
    },
    {
      "id": "l1690-c78-c86",
      "origem": "c78",
      "destino": "c86",
      "distância": 474.915
    },
    {
      "id": "l1691-c39-c81",
      "origem": "c39",
      "destino": "c81",
      "distância": 204.105
    },
    {
      "id": "l1692-c2-c63",
      "origem": "c2",
      "destino": "c63",
      "distância": 323.374
    },
    {
      "id": "l1693-c53-c73",
      "origem": "c53",
      "destino": "c73",
      "distância": 44.851
    },
    {
      "id": "l1694-c34-c53",
      "origem": "c34",
      "destino": "c53",
      "distância": 171.664
    },
    {
      "id": "l1695-c55-c91",
      "origem": "c55",
      "destino": "c91",
      "distância": 397.463
    },
    {
      "id": "l1696-c27-c82",
      "origem": "c27",
      "destino": "c82",
      "distância": 98.213
    },
    {
      "id": "l1697-c20-c82",
      "origem": "c20",
      "destino": "c82",
      "distância": 69.9
    },
    {
      "id": "l1698-c2-c78",
      "origem": "c2",
      "destino": "c78",
      "distância": 120.836
    },
    {
      "id": "l1699-c33-c98",
      "origem": "c33",
      "destino": "c98",
      "distância": 83.301
    },
    {
      "id": "l1700-c51-c77",
      "origem": "c51",
      "destino": "c77",
      "distância": 129.414
    },
    {
      "id": "l1701-c37-c69",
      "origem": "c37",
      "destino": "c69",
      "distância": 6.448
    },
    {
      "id": "l1702-c35-c51",
      "origem": "c35",
      "destino": "c51",
      "distância": 393.69
    },
    {
      "id": "l1703-c26-c49",
      "origem": "c26",
      "destino": "c49",
      "distância": 434.955
    },
    {
      "id": "l1704-c2-c23",
      "origem": "c2",
      "destino": "c23",
      "distância": 374.742
    },
    {
      "id": "l1705-c51-c96",
      "origem": "c51",
      "destino": "c96",
      "distância": 185.882
    },
    {
      "id": "l1706-c37-c90",
      "origem": "c37",
      "destino": "c90",
      "distância": 567.131
    },
    {
      "id": "l1707-c14-c65",
      "origem": "c14",
      "destino": "c65",
      "distância": 40.196
    },
    {
      "id": "l1708-c30-c55",
      "origem": "c30",
      "destino": "c55",
      "distância": 21.959
    },
    {
      "id": "l1709-c64-c73",
      "origem": "c64",
      "destino": "c73",
      "distância": 424.725
    },
    {
      "id": "l1710-c2-c90",
      "origem": "c2",
      "destino": "c90",
      "distância": 432.342
    },
    {
      "id": "l1711-c22-c31",
      "origem": "c22",
      "destino": "c31",
      "distância": 202.164
    },
    {
      "id": "l1712-c28-c52",
      "origem": "c28",
      "destino": "c52",
      "distância": 505.4
    },
    {
      "id": "l1713-c3-c33",
      "origem": "c3",
      "destino": "c33",
      "distância": 570.888
    },
    {
      "id": "l1714-c53-c62",
      "origem": "c53",
      "destino": "c62",
      "distância": 187.768
    },
    {
      "id": "l1715-c3-c22",
      "origem": "c3",
      "destino": "c22",
      "distância": 552.961
    },
    {
      "id": "l1716-c17-c68",
      "origem": "c17",
      "destino": "c68",
      "distância": 370.316
    },
    {
      "id": "l1717-c30-c60",
      "origem": "c30",
      "destino": "c60",
      "distância": 353.174
    },
    {
      "id": "l1718-c47-c83",
      "origem": "c47",
      "destino": "c83",
      "distância": 429.156
    },
    {
      "id": "l1719-c21-c80",
      "origem": "c21",
      "destino": "c80",
      "distância": 490.573
    },
    {
      "id": "l1720-c14-c22",
      "origem": "c14",
      "destino": "c22",
      "distância": 386.845
    },
    {
      "id": "l1721-c36-c89",
      "origem": "c36",
      "destino": "c89",
      "distância": 101.765
    },
    {
      "id": "l1722-c35-c66",
      "origem": "c35",
      "destino": "c66",
      "distância": 58.332
    },
    {
      "id": "l1723-c68-c98",
      "origem": "c68",
      "destino": "c98",
      "distância": 44.609
    },
    {
      "id": "l1724-c30-c88",
      "origem": "c30",
      "destino": "c88",
      "distância": 570.866
    },
    {
      "id": "l1725-c22-c33",
      "origem": "c22",
      "destino": "c33",
      "distância": 191.397
    },
    {
      "id": "l1726-c4-c8",
      "origem": "c4",
      "destino": "c8",
      "distância": 391.158
    },
    {
      "id": "l1727-c66-c73",
      "origem": "c66",
      "destino": "c73",
      "distância": 505.698
    },
    {
      "id": "l1728-c5-c72",
      "origem": "c5",
      "destino": "c72",
      "distância": 475.933
    },
    {
      "id": "l1729-c43-c78",
      "origem": "c43",
      "destino": "c78",
      "distância": 366.324
    },
    {
      "id": "l1730-c17-c86",
      "origem": "c17",
      "destino": "c86",
      "distância": 102.104
    },
    {
      "id": "l1731-c7-c54",
      "origem": "c7",
      "destino": "c54",
      "distância": 224.656
    },
    {
      "id": "l1732-c9-c73",
      "origem": "c9",
      "destino": "c73",
      "distância": 430.963
    },
    {
      "id": "l1733-c14-c25",
      "origem": "c14",
      "destino": "c25",
      "distância": 192.356
    },
    {
      "id": "l1734-c36-c44",
      "origem": "c36",
      "destino": "c44",
      "distância": 485.494
    },
    {
      "id": "l1735-c22-c89",
      "origem": "c22",
      "destino": "c89",
      "distância": 20.454
    },
    {
      "id": "l1736-c1-c67",
      "origem": "c1",
      "destino": "c67",
      "distância": 361.298
    },
    {
      "id": "l1737-c16-c90",
      "origem": "c16",
      "destino": "c90",
      "distância": 253.428
    },
    {
      "id": "l1738-c11-c84",
      "origem": "c11",
      "destino": "c84",
      "distância": 410.574
    },
    {
      "id": "l1739-c44-c61",
      "origem": "c44",
      "destino": "c61",
      "distância": 320.896
    },
    {
      "id": "l1740-c9-c50",
      "origem": "c9",
      "destino": "c50",
      "distância": 402.487
    },
    {
      "id": "l1741-c8-c92",
      "origem": "c8",
      "destino": "c92",
      "distância": 428.113
    },
    {
      "id": "l1742-c1-c66",
      "origem": "c1",
      "destino": "c66",
      "distância": 22.956
    },
    {
      "id": "l1743-c29-c68",
      "origem": "c29",
      "destino": "c68",
      "distância": 258.429
    },
    {
      "id": "l1744-c5-c60",
      "origem": "c5",
      "destino": "c60",
      "distância": 334.967
    },
    {
      "id": "l1745-c24-c81",
      "origem": "c24",
      "destino": "c81",
      "distância": 176.348
    },
    {
      "id": "l1746-c7-c92",
      "origem": "c7",
      "destino": "c92",
      "distância": 595.678
    },
    {
      "id": "l1747-c47-c93",
      "origem": "c47",
      "destino": "c93",
      "distância": 404.643
    },
    {
      "id": "l1748-c4-c19",
      "origem": "c4",
      "destino": "c19",
      "distância": 342.258
    },
    {
      "id": "l1749-c40-c89",
      "origem": "c40",
      "destino": "c89",
      "distância": 76.572
    },
    {
      "id": "l1750-c1-c19",
      "origem": "c1",
      "destino": "c19",
      "distância": 237.059
    },
    {
      "id": "l1751-c57-c69",
      "origem": "c57",
      "destino": "c69",
      "distância": 317.672
    },
    {
      "id": "l1752-c28-c71",
      "origem": "c28",
      "destino": "c71",
      "distância": 535.519
    },
    {
      "id": "l1753-c8-c25",
      "origem": "c8",
      "destino": "c25",
      "distância": 330.714
    },
    {
      "id": "l1754-c16-c91",
      "origem": "c16",
      "destino": "c91",
      "distância": 471.109
    },
    {
      "id": "l1755-c21-c33",
      "origem": "c21",
      "destino": "c33",
      "distância": 457.911
    },
    {
      "id": "l1756-c60-c61",
      "origem": "c60",
      "destino": "c61",
      "distância": 519.935
    },
    {
      "id": "l1757-c2-c47",
      "origem": "c2",
      "destino": "c47",
      "distância": 206.376
    },
    {
      "id": "l1758-c37-c86",
      "origem": "c37",
      "destino": "c86",
      "distância": 585.288
    },
    {
      "id": "l1759-c32-c90",
      "origem": "c32",
      "destino": "c90",
      "distância": 166.714
    },
    {
      "id": "l1760-c10-c59",
      "origem": "c10",
      "destino": "c59",
      "distância": 287.709
    },
    {
      "id": "l1761-c89-c90",
      "origem": "c89",
      "destino": "c90",
      "distância": 590.59
    },
    {
      "id": "l1762-c20-c61",
      "origem": "c20",
      "destino": "c61",
      "distância": 361.669
    },
    {
      "id": "l1763-c70-c95",
      "origem": "c70",
      "destino": "c95",
      "distância": 522.767
    },
    {
      "id": "l1764-c6-c78",
      "origem": "c6",
      "destino": "c78",
      "distância": 504.717
    },
    {
      "id": "l1765-c16-c74",
      "origem": "c16",
      "destino": "c74",
      "distância": 440.544
    },
    {
      "id": "l1766-c33-c61",
      "origem": "c33",
      "destino": "c61",
      "distância": 218.658
    },
    {
      "id": "l1767-c51-c81",
      "origem": "c51",
      "destino": "c81",
      "distância": 37.397
    },
    {
      "id": "l1768-c42-c91",
      "origem": "c42",
      "destino": "c91",
      "distância": 424.703
    },
    {
      "id": "l1769-c16-c46",
      "origem": "c16",
      "destino": "c46",
      "distância": 254.318
    },
    {
      "id": "l1770-c47-c65",
      "origem": "c47",
      "destino": "c65",
      "distância": 238.739
    },
    {
      "id": "l1771-c29-c34",
      "origem": "c29",
      "destino": "c34",
      "distância": 434.78
    },
    {
      "id": "l1772-c81-c99",
      "origem": "c81",
      "destino": "c99",
      "distância": 228.245
    },
    {
      "id": "l1773-c51-c98",
      "origem": "c51",
      "destino": "c98",
      "distância": 338.232
    },
    {
      "id": "l1774-c72-c84",
      "origem": "c72",
      "destino": "c84",
      "distância": 172.553
    },
    {
      "id": "l1775-c15-c63",
      "origem": "c15",
      "destino": "c63",
      "distância": 111.237
    },
    {
      "id": "l1776-c34-c41",
      "origem": "c34",
      "destino": "c41",
      "distância": 98.475
    },
    {
      "id": "l1777-c5-c58",
      "origem": "c5",
      "destino": "c58",
      "distância": 262.096
    },
    {
      "id": "l1778-c15-c24",
      "origem": "c15",
      "destino": "c24",
      "distância": 41.905
    },
    {
      "id": "l1779-c10-c65",
      "origem": "c10",
      "destino": "c65",
      "distância": 212.382
    },
    {
      "id": "l1780-c11-c75",
      "origem": "c11",
      "destino": "c75",
      "distância": 338.255
    },
    {
      "id": "l1781-c15-c21",
      "origem": "c15",
      "destino": "c21",
      "distância": 41.748
    },
    {
      "id": "l1782-c21-c68",
      "origem": "c21",
      "destino": "c68",
      "distância": 293.835
    },
    {
      "id": "l1783-c55-c85",
      "origem": "c55",
      "destino": "c85",
      "distância": 285.923
    },
    {
      "id": "l1784-c3-c96",
      "origem": "c3",
      "destino": "c96",
      "distância": 58.46
    },
    {
      "id": "l1785-c50-c79",
      "origem": "c50",
      "destino": "c79",
      "distância": 352.637
    },
    {
      "id": "l1786-c64-c84",
      "origem": "c64",
      "destino": "c84",
      "distância": 594.138
    },
    {
      "id": "l1787-c30-c65",
      "origem": "c30",
      "destino": "c65",
      "distância": 267.753
    },
    {
      "id": "l1788-c68-c91",
      "origem": "c68",
      "destino": "c91",
      "distância": 330.495
    },
    {
      "id": "l1789-c80-c84",
      "origem": "c80",
      "destino": "c84",
      "distância": 196.912
    },
    {
      "id": "l1790-c27-c30",
      "origem": "c27",
      "destino": "c30",
      "distância": 354.555
    },
    {
      "id": "l1791-c5-c97",
      "origem": "c5",
      "destino": "c97",
      "distância": 163.758
    },
    {
      "id": "l1792-c9-c86",
      "origem": "c9",
      "destino": "c86",
      "distância": 358.448
    },
    {
      "id": "l1793-c3-c89",
      "origem": "c3",
      "destino": "c89",
      "distância": 461.936
    },
    {
      "id": "l1794-c77-c80",
      "origem": "c77",
      "destino": "c80",
      "distância": 484.508
    },
    {
      "id": "l1795-c11-c87",
      "origem": "c11",
      "destino": "c87",
      "distância": 32.279
    },
    {
      "id": "l1796-c17-c99",
      "origem": "c17",
      "destino": "c99",
      "distância": 226.924
    },
    {
      "id": "l1797-c55-c71",
      "origem": "c55",
      "destino": "c71",
      "distância": 233.647
    },
    {
      "id": "l1798-c39-c96",
      "origem": "c39",
      "destino": "c96",
      "distância": 232.333
    },
    {
      "id": "l1799-c53-c97",
      "origem": "c53",
      "destino": "c97",
      "distância": 65.088
    },
    {
      "id": "l1800-c57-c90",
      "origem": "c57",
      "destino": "c90",
      "distância": 408.425
    },
    {
      "id": "l1801-c26-c94",
      "origem": "c26",
      "destino": "c94",
      "distância": 159.797
    },
    {
      "id": "l1802-c6-c15",
      "origem": "c6",
      "destino": "c15",
      "distância": 337.133
    },
    {
      "id": "l1803-c41-c94",
      "origem": "c41",
      "destino": "c94",
      "distância": 330.894
    },
    {
      "id": "l1804-c58-c100",
      "origem": "c58",
      "destino": "c100",
      "distância": 575.423
    },
    {
      "id": "l1805-c7-c20",
      "origem": "c7",
      "destino": "c20",
      "distância": 571.249
    },
    {
      "id": "l1806-c5-c9",
      "origem": "c5",
      "destino": "c9",
      "distância": 120.882
    },
    {
      "id": "l1807-c6-c47",
      "origem": "c6",
      "destino": "c47",
      "distância": 570.259
    },
    {
      "id": "l1808-c59-c68",
      "origem": "c59",
      "destino": "c68",
      "distância": 318.268
    },
    {
      "id": "l1809-c26-c51",
      "origem": "c26",
      "destino": "c51",
      "distância": 504.449
    },
    {
      "id": "l1810-c48-c83",
      "origem": "c48",
      "destino": "c83",
      "distância": 548.08
    },
    {
      "id": "l1811-c16-c43",
      "origem": "c16",
      "destino": "c43",
      "distância": 409.175
    },
    {
      "id": "l1812-c17-c41",
      "origem": "c17",
      "destino": "c41",
      "distância": 423.069
    },
    {
      "id": "l1813-c3-c30",
      "origem": "c3",
      "destino": "c30",
      "distância": 239.469
    },
    {
      "id": "l1814-c47-c67",
      "origem": "c47",
      "destino": "c67",
      "distância": 210.602
    },
    {
      "id": "l1815-c40-c58",
      "origem": "c40",
      "destino": "c58",
      "distância": 580.289
    },
    {
      "id": "l1816-c63-c65",
      "origem": "c63",
      "destino": "c65",
      "distância": 78.425
    },
    {
      "id": "l1817-c52-c89",
      "origem": "c52",
      "destino": "c89",
      "distância": 523.057
    },
    {
      "id": "l1818-c37-c81",
      "origem": "c37",
      "destino": "c81",
      "distância": 576.841
    },
    {
      "id": "l1819-c29-c78",
      "origem": "c29",
      "destino": "c78",
      "distância": 209.762
    },
    {
      "id": "l1820-c45-c95",
      "origem": "c45",
      "destino": "c95",
      "distância": 78.303
    },
    {
      "id": "l1821-c48-c87",
      "origem": "c48",
      "destino": "c87",
      "distância": 483.009
    },
    {
      "id": "l1822-c41-c56",
      "origem": "c41",
      "destino": "c56",
      "distância": 423.802
    },
    {
      "id": "l1823-c50-c67",
      "origem": "c50",
      "destino": "c67",
      "distância": 137.784
    },
    {
      "id": "l1824-c50-c54",
      "origem": "c50",
      "destino": "c54",
      "distância": 510.938
    },
    {
      "id": "l1825-c45-c83",
      "origem": "c45",
      "destino": "c83",
      "distância": 295.373
    },
    {
      "id": "l1826-c40-c77",
      "origem": "c40",
      "destino": "c77",
      "distância": 54.063
    },
    {
      "id": "l1827-c40-c79",
      "origem": "c40",
      "destino": "c79",
      "distância": 541.552
    },
    {
      "id": "l1828-c45-c89",
      "origem": "c45",
      "destino": "c89",
      "distância": 493.259
    },
    {
      "id": "l1829-c33-c54",
      "origem": "c33",
      "destino": "c54",
      "distância": 316.328
    },
    {
      "id": "l1830-c53-c77",
      "origem": "c53",
      "destino": "c77",
      "distância": 199.626
    },
    {
      "id": "l1831-c12-c65",
      "origem": "c12",
      "destino": "c65",
      "distância": 266.846
    },
    {
      "id": "l1832-c25-c91",
      "origem": "c25",
      "destino": "c91",
      "distância": 561.127
    },
    {
      "id": "l1833-c12-c100",
      "origem": "c12",
      "destino": "c100",
      "distância": 73.791
    },
    {
      "id": "l1834-c80-c83",
      "origem": "c80",
      "destino": "c83",
      "distância": 381.904
    },
    {
      "id": "l1835-c4-c33",
      "origem": "c4",
      "destino": "c33",
      "distância": 419.114
    },
    {
      "id": "l1836-c21-c43",
      "origem": "c21",
      "destino": "c43",
      "distância": 478.76
    },
    {
      "id": "l1837-c15-c35",
      "origem": "c15",
      "destino": "c35",
      "distância": 369.557
    },
    {
      "id": "l1838-c69-c70",
      "origem": "c69",
      "destino": "c70",
      "distância": 456.627
    },
    {
      "id": "l1839-c30-c98",
      "origem": "c30",
      "destino": "c98",
      "distância": 381.877
    },
    {
      "id": "l1840-c13-c71",
      "origem": "c13",
      "destino": "c71",
      "distância": 161.348
    },
    {
      "id": "l1841-c2-c57",
      "origem": "c2",
      "destino": "c57",
      "distância": 55.144
    },
    {
      "id": "l1842-c39-c70",
      "origem": "c39",
      "destino": "c70",
      "distância": 245.377
    },
    {
      "id": "l1843-c95-c99",
      "origem": "c95",
      "destino": "c99",
      "distância": 430.44
    },
    {
      "id": "l1844-c56-c85",
      "origem": "c56",
      "destino": "c85",
      "distância": 519.15
    },
    {
      "id": "l1845-c30-c73",
      "origem": "c30",
      "destino": "c73",
      "distância": 185.192
    },
    {
      "id": "l1846-c46-c81",
      "origem": "c46",
      "destino": "c81",
      "distância": 78.125
    },
    {
      "id": "l1847-c65-c89",
      "origem": "c65",
      "destino": "c89",
      "distância": 450.79
    },
    {
      "id": "l1848-c27-c70",
      "origem": "c27",
      "destino": "c70",
      "distância": 358.525
    },
    {
      "id": "l1849-c19-c68",
      "origem": "c19",
      "destino": "c68",
      "distância": 490.902
    },
    {
      "id": "l1850-c30-c84",
      "origem": "c30",
      "destino": "c84",
      "distância": 289.021
    },
    {
      "id": "l1851-c97-c100",
      "origem": "c97",
      "destino": "c100",
      "distância": 289.914
    },
    {
      "id": "l1852-c54-c83",
      "origem": "c54",
      "destino": "c83",
      "distância": 505.991
    },
    {
      "id": "l1853-c12-c21",
      "origem": "c12",
      "destino": "c21",
      "distância": 112.901
    },
    {
      "id": "l1854-c2-c76",
      "origem": "c2",
      "destino": "c76",
      "distância": 573.363
    },
    {
      "id": "l1855-c46-c51",
      "origem": "c46",
      "destino": "c51",
      "distância": 204.241
    },
    {
      "id": "l1856-c21-c39",
      "origem": "c21",
      "destino": "c39",
      "distância": 337.852
    },
    {
      "id": "l1857-c46-c77",
      "origem": "c46",
      "destino": "c77",
      "distância": 534.529
    },
    {
      "id": "l1858-c17-c28",
      "origem": "c17",
      "destino": "c28",
      "distância": 251.315
    },
    {
      "id": "l1859-c37-c77",
      "origem": "c37",
      "destino": "c77",
      "distância": 194.623
    },
    {
      "id": "l1860-c42-c74",
      "origem": "c42",
      "destino": "c74",
      "distância": 279.907
    },
    {
      "id": "l1861-c5-c27",
      "origem": "c5",
      "destino": "c27",
      "distância": 408.694
    },
    {
      "id": "l1862-c8-c91",
      "origem": "c8",
      "destino": "c91",
      "distância": 342.553
    },
    {
      "id": "l1863-c35-c95",
      "origem": "c35",
      "destino": "c95",
      "distância": 343.245
    },
    {
      "id": "l1864-c10-c29",
      "origem": "c10",
      "destino": "c29",
      "distância": 103.138
    },
    {
      "id": "l1865-c56-c58",
      "origem": "c56",
      "destino": "c58",
      "distância": 422.064
    },
    {
      "id": "l1866-c27-c77",
      "origem": "c27",
      "destino": "c77",
      "distância": 121.625
    },
    {
      "id": "l1867-c40-c73",
      "origem": "c40",
      "destino": "c73",
      "distância": 386.557
    },
    {
      "id": "l1868-c59-c84",
      "origem": "c59",
      "destino": "c84",
      "distância": 49.044
    },
    {
      "id": "l1869-c10-c33",
      "origem": "c10",
      "destino": "c33",
      "distância": 7.893
    },
    {
      "id": "l1870-c44-c58",
      "origem": "c44",
      "destino": "c58",
      "distância": 460.537
    },
    {
      "id": "l1871-c2-c29",
      "origem": "c2",
      "destino": "c29",
      "distância": 325.243
    },
    {
      "id": "l1872-c41-c87",
      "origem": "c41",
      "destino": "c87",
      "distância": 345.281
    },
    {
      "id": "l1873-c75-c100",
      "origem": "c75",
      "destino": "c100",
      "distância": 242.756
    },
    {
      "id": "l1874-c5-c13",
      "origem": "c5",
      "destino": "c13",
      "distância": 510.502
    },
    {
      "id": "l1875-c73-c88",
      "origem": "c73",
      "destino": "c88",
      "distância": 550.281
    },
    {
      "id": "l1876-c63-c94",
      "origem": "c63",
      "destino": "c94",
      "distância": 355.503
    },
    {
      "id": "l1877-c24-c71",
      "origem": "c24",
      "destino": "c71",
      "distância": 163.531
    },
    {
      "id": "l1878-c10-c82",
      "origem": "c10",
      "destino": "c82",
      "distância": 375.288
    },
    {
      "id": "l1879-c64-c83",
      "origem": "c64",
      "destino": "c83",
      "distância": 222.502
    },
    {
      "id": "l1880-c40-c49",
      "origem": "c40",
      "destino": "c49",
      "distância": 363.956
    },
    {
      "id": "l1881-c28-c73",
      "origem": "c28",
      "destino": "c73",
      "distância": 28.344
    },
    {
      "id": "l1882-c35-c46",
      "origem": "c35",
      "destino": "c46",
      "distância": 378.179
    },
    {
      "id": "l1883-c24-c38",
      "origem": "c24",
      "destino": "c38",
      "distância": 56.155
    },
    {
      "id": "l1884-c51-c67",
      "origem": "c51",
      "destino": "c67",
      "distância": 585.736
    },
    {
      "id": "l1885-c27-c44",
      "origem": "c27",
      "destino": "c44",
      "distância": 76.495
    },
    {
      "id": "l1886-c18-c59",
      "origem": "c18",
      "destino": "c59",
      "distância": 146.423
    },
    {
      "id": "l1887-c64-c78",
      "origem": "c64",
      "destino": "c78",
      "distância": 369.877
    },
    {
      "id": "l1888-c22-c42",
      "origem": "c22",
      "destino": "c42",
      "distância": 390.846
    },
    {
      "id": "l1889-c55-c86",
      "origem": "c55",
      "destino": "c86",
      "distância": 419.199
    },
    {
      "id": "l1890-c5-c71",
      "origem": "c5",
      "destino": "c71",
      "distância": 596.94
    },
    {
      "id": "l1891-c23-c72",
      "origem": "c23",
      "destino": "c72",
      "distância": 336.816
    },
    {
      "id": "l1892-c5-c43",
      "origem": "c5",
      "destino": "c43",
      "distância": 378.759
    },
    {
      "id": "l1893-c11-c70",
      "origem": "c11",
      "destino": "c70",
      "distância": 127.216
    },
    {
      "id": "l1894-c4-c18",
      "origem": "c4",
      "destino": "c18",
      "distância": 573.863
    },
    {
      "id": "l1895-c12-c15",
      "origem": "c12",
      "destino": "c15",
      "distância": 497.129
    },
    {
      "id": "l1896-c8-c61",
      "origem": "c8",
      "destino": "c61",
      "distância": 267.463
    },
    {
      "id": "l1897-c7-c15",
      "origem": "c7",
      "destino": "c15",
      "distância": 426.357
    },
    {
      "id": "l1898-c53-c66",
      "origem": "c53",
      "destino": "c66",
      "distância": 527.508
    },
    {
      "id": "l1899-c12-c62",
      "origem": "c12",
      "destino": "c62",
      "distância": 373.393
    },
    {
      "id": "l1900-c16-c69",
      "origem": "c16",
      "destino": "c69",
      "distância": 311.8
    },
    {
      "id": "l1901-c65-c70",
      "origem": "c65",
      "destino": "c70",
      "distância": 468.89
    },
    {
      "id": "l1902-c55-c90",
      "origem": "c55",
      "destino": "c90",
      "distância": 486.953
    },
    {
      "id": "l1903-c7-c86",
      "origem": "c7",
      "destino": "c86",
      "distância": 19.456
    },
    {
      "id": "l1904-c6-c89",
      "origem": "c6",
      "destino": "c89",
      "distância": 570.595
    },
    {
      "id": "l1905-c13-c31",
      "origem": "c13",
      "destino": "c31",
      "distância": 358.033
    },
    {
      "id": "l1906-c23-c64",
      "origem": "c23",
      "destino": "c64",
      "distância": 460.144
    },
    {
      "id": "l1907-c62-c76",
      "origem": "c62",
      "destino": "c76",
      "distância": 499.483
    },
    {
      "id": "l1908-c39-c86",
      "origem": "c39",
      "destino": "c86",
      "distância": 128.753
    },
    {
      "id": "l1909-c48-c54",
      "origem": "c48",
      "destino": "c54",
      "distância": 317.14
    },
    {
      "id": "l1910-c29-c75",
      "origem": "c29",
      "destino": "c75",
      "distância": 416.716
    },
    {
      "id": "l1911-c25-c92",
      "origem": "c25",
      "destino": "c92",
      "distância": 585.986
    },
    {
      "id": "l1912-c17-c29",
      "origem": "c17",
      "destino": "c29",
      "distância": 504.731
    },
    {
      "id": "l1913-c53-c76",
      "origem": "c53",
      "destino": "c76",
      "distância": 456.897
    },
    {
      "id": "l1914-c50-c63",
      "origem": "c50",
      "destino": "c63",
      "distância": 532.594
    },
    {
      "id": "l1915-c55-c76",
      "origem": "c55",
      "destino": "c76",
      "distância": 42.181
    },
    {
      "id": "l1916-c7-c70",
      "origem": "c7",
      "destino": "c70",
      "distância": 208.048
    },
    {
      "id": "l1917-c9-c11",
      "origem": "c9",
      "destino": "c11",
      "distância": 199.636
    },
    {
      "id": "l1918-c6-c84",
      "origem": "c6",
      "destino": "c84",
      "distância": 323.096
    },
    {
      "id": "l1919-c13-c68",
      "origem": "c13",
      "destino": "c68",
      "distância": 457.131
    },
    {
      "id": "l1920-c5-c28",
      "origem": "c5",
      "destino": "c28",
      "distância": 175.871
    },
    {
      "id": "l1921-c23-c95",
      "origem": "c23",
      "destino": "c95",
      "distância": 116.697
    },
    {
      "id": "l1922-c25-c63",
      "origem": "c25",
      "destino": "c63",
      "distância": 22.677
    },
    {
      "id": "l1923-c58-c97",
      "origem": "c58",
      "destino": "c97",
      "distância": 289.866
    },
    {
      "id": "l1924-c19-c72",
      "origem": "c19",
      "destino": "c72",
      "distância": 430.639
    },
    {
      "id": "l1925-c2-c54",
      "origem": "c2",
      "destino": "c54",
      "distância": 152.026
    },
    {
      "id": "l1926-c2-c37",
      "origem": "c2",
      "destino": "c37",
      "distância": 320.429
    },
    {
      "id": "l1927-c18-c61",
      "origem": "c18",
      "destino": "c61",
      "distância": 83.78
    },
    {
      "id": "l1928-c54-c72",
      "origem": "c54",
      "destino": "c72",
      "distância": 337.959
    },
    {
      "id": "l1929-c5-c75",
      "origem": "c5",
      "destino": "c75",
      "distância": 520.543
    },
    {
      "id": "l1930-c58-c79",
      "origem": "c58",
      "destino": "c79",
      "distância": 178.977
    },
    {
      "id": "l1931-c52-c69",
      "origem": "c52",
      "destino": "c69",
      "distância": 14.999
    },
    {
      "id": "l1932-c73-c87",
      "origem": "c73",
      "destino": "c87",
      "distância": 40.571
    },
    {
      "id": "l1933-c17-c84",
      "origem": "c17",
      "destino": "c84",
      "distância": 64.842
    },
    {
      "id": "l1934-c19-c62",
      "origem": "c19",
      "destino": "c62",
      "distância": 486.808
    },
    {
      "id": "l1935-c25-c68",
      "origem": "c25",
      "destino": "c68",
      "distância": 457.86
    },
    {
      "id": "l1936-c63-c90",
      "origem": "c63",
      "destino": "c90",
      "distância": 579.117
    },
    {
      "id": "l1937-c55-c80",
      "origem": "c55",
      "destino": "c80",
      "distância": 47.634
    },
    {
      "id": "l1938-c62-c82",
      "origem": "c62",
      "destino": "c82",
      "distância": 290.701
    },
    {
      "id": "l1939-c33-c97",
      "origem": "c33",
      "destino": "c97",
      "distância": 361.397
    },
    {
      "id": "l1940-c18-c75",
      "origem": "c18",
      "destino": "c75",
      "distância": 385.242
    },
    {
      "id": "l1941-c47-c71",
      "origem": "c47",
      "destino": "c71",
      "distância": 325.386
    },
    {
      "id": "l1942-c3-c23",
      "origem": "c3",
      "destino": "c23",
      "distância": 64.727
    },
    {
      "id": "l1943-c12-c52",
      "origem": "c12",
      "destino": "c52",
      "distância": 228.337
    },
    {
      "id": "l1944-c7-c80",
      "origem": "c7",
      "destino": "c80",
      "distância": 234.167
    },
    {
      "id": "l1945-c5-c55",
      "origem": "c5",
      "destino": "c55",
      "distância": 79.188
    },
    {
      "id": "l1946-c29-c98",
      "origem": "c29",
      "destino": "c98",
      "distância": 64.246
    },
    {
      "id": "l1947-c37-c96",
      "origem": "c37",
      "destino": "c96",
      "distância": 417.252
    },
    {
      "id": "l1948-c10-c53",
      "origem": "c10",
      "destino": "c53",
      "distância": 205.345
    },
    {
      "id": "l1949-c1-c87",
      "origem": "c1",
      "destino": "c87",
      "distância": 41.572
    },
    {
      "id": "l1950-c16-c40",
      "origem": "c16",
      "destino": "c40",
      "distância": 124.243
    },
    {
      "id": "l1951-c77-c95",
      "origem": "c77",
      "destino": "c95",
      "distância": 144.369
    },
    {
      "id": "l1952-c64-c68",
      "origem": "c64",
      "destino": "c68",
      "distância": 181.275
    },
    {
      "id": "l1953-c32-c45",
      "origem": "c32",
      "destino": "c45",
      "distância": 503.263
    },
    {
      "id": "l1954-c26-c80",
      "origem": "c26",
      "destino": "c80",
      "distância": 383.715
    },
    {
      "id": "l1955-c49-c74",
      "origem": "c49",
      "destino": "c74",
      "distância": 192.001
    },
    {
      "id": "l1956-c43-c91",
      "origem": "c43",
      "destino": "c91",
      "distância": 115.682
    },
    {
      "id": "l1957-c12-c38",
      "origem": "c12",
      "destino": "c38",
      "distância": 153.844
    },
    {
      "id": "l1958-c51-c76",
      "origem": "c51",
      "destino": "c76",
      "distância": 550.741
    },
    {
      "id": "l1959-c18-c51",
      "origem": "c18",
      "destino": "c51",
      "distância": 505.174
    },
    {
      "id": "l1960-c13-c77",
      "origem": "c13",
      "destino": "c77",
      "distância": 387.156
    },
    {
      "id": "l1961-c31-c33",
      "origem": "c31",
      "destino": "c33",
      "distância": 246.6
    },
    {
      "id": "l1962-c13-c24",
      "origem": "c13",
      "destino": "c24",
      "distância": 423.503
    },
    {
      "id": "l1963-c28-c30",
      "origem": "c28",
      "destino": "c30",
      "distância": 574.568
    },
    {
      "id": "l1964-c26-c30",
      "origem": "c26",
      "destino": "c30",
      "distância": 117.983
    },
    {
      "id": "l1965-c24-c25",
      "origem": "c24",
      "destino": "c25",
      "distância": 187.134
    },
    {
      "id": "l1966-c25-c56",
      "origem": "c25",
      "destino": "c56",
      "distância": 125.206
    },
    {
      "id": "l1967-c28-c59",
      "origem": "c28",
      "destino": "c59",
      "distância": 252.273
    },
    {
      "id": "l1968-c14-c91",
      "origem": "c14",
      "destino": "c91",
      "distância": 125.742
    },
    {
      "id": "l1969-c77-c91",
      "origem": "c77",
      "destino": "c91",
      "distância": 237.291
    },
    {
      "id": "l1970-c35-c58",
      "origem": "c35",
      "destino": "c58",
      "distância": 176.55
    },
    {
      "id": "l1971-c14-c40",
      "origem": "c14",
      "destino": "c40",
      "distância": 539.845
    },
    {
      "id": "l1972-c1-c64",
      "origem": "c1",
      "destino": "c64",
      "distância": 240.477
    },
    {
      "id": "l1973-c7-c96",
      "origem": "c7",
      "destino": "c96",
      "distância": 5.461
    },
    {
      "id": "l1974-c17-c64",
      "origem": "c17",
      "destino": "c64",
      "distância": 33.52
    },
    {
      "id": "l1975-c60-c99",
      "origem": "c60",
      "destino": "c99",
      "distância": 594.932
    },
    {
      "id": "l1976-c8-c90",
      "origem": "c8",
      "destino": "c90",
      "distância": 453.428
    },
    {
      "id": "l1977-c34-c91",
      "origem": "c34",
      "destino": "c91",
      "distância": 39.269
    },
    {
      "id": "l1978-c23-c100",
      "origem": "c23",
      "destino": "c100",
      "distância": 284.239
    },
    {
      "id": "l1979-c7-c85",
      "origem": "c7",
      "destino": "c85",
      "distância": 595.372
    },
    {
      "id": "l1980-c72-c79",
      "origem": "c72",
      "destino": "c79",
      "distância": 267.349
    },
    {
      "id": "l1981-c28-c41",
      "origem": "c28",
      "destino": "c41",
      "distância": 172.324
    },
    {
      "id": "l1982-c50-c70",
      "origem": "c50",
      "destino": "c70",
      "distância": 168.944
    },
    {
      "id": "l1983-c8-c10",
      "origem": "c8",
      "destino": "c10",
      "distância": 83.038
    },
    {
      "id": "l1984-c68-c73",
      "origem": "c68",
      "destino": "c73",
      "distância": 206.639
    },
    {
      "id": "l1985-c24-c100",
      "origem": "c24",
      "destino": "c100",
      "distância": 546.419
    },
    {
      "id": "l1986-c29-c74",
      "origem": "c29",
      "destino": "c74",
      "distância": 94.292
    },
    {
      "id": "l1987-c36-c80",
      "origem": "c36",
      "destino": "c80",
      "distância": 141.296
    },
    {
      "id": "l1988-c94-c100",
      "origem": "c94",
      "destino": "c100",
      "distância": 298.006
    },
    {
      "id": "l1989-c14-c72",
      "origem": "c14",
      "destino": "c72",
      "distância": 370.107
    },
    {
      "id": "l1990-c18-c46",
      "origem": "c18",
      "destino": "c46",
      "distância": 102.285
    },
    {
      "id": "l1991-c65-c71",
      "origem": "c65",
      "destino": "c71",
      "distância": 344.626
    },
    {
      "id": "l1992-c72-c83",
      "origem": "c72",
      "destino": "c83",
      "distância": 362.657
    },
    {
      "id": "l1993-c56-c75",
      "origem": "c56",
      "destino": "c75",
      "distância": 337.887
    },
    {
      "id": "l1994-c51-c57",
      "origem": "c51",
      "destino": "c57",
      "distância": 242.55
    },
    {
      "id": "l1995-c2-c96",
      "origem": "c2",
      "destino": "c96",
      "distância": 397.069
    },
    {
      "id": "l1996-c41-c89",
      "origem": "c41",
      "destino": "c89",
      "distância": 408.257
    },
    {
      "id": "l1997-c8-c18",
      "origem": "c8",
      "destino": "c18",
      "distância": 512.839
    },
    {
      "id": "l1998-c37-c50",
      "origem": "c37",
      "destino": "c50",
      "distância": 466.457
    },
    {
      "id": "l1999-c79-c81",
      "origem": "c79",
      "destino": "c81",
      "distância": 288.763
    },
    {
      "id": "l2000-c20-c72",
      "origem": "c20",
      "destino": "c72",
      "distância": 164.215
    }
]

ligacoesModel.create(data)

console.log("Done")