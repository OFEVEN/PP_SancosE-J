var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SC_caracha_1 = new ol.format.GeoJSON();
var features_SC_caracha_1 = format_SC_caracha_1.readFeatures(json_SC_caracha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SC_caracha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SC_caracha_1.addFeatures(features_SC_caracha_1);
var lyr_SC_caracha_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SC_caracha_1, 
                style: style_SC_caracha_1,
                popuplayertitle: 'SC_caracha',
                interactive: true,
                title: '<img src="styles/legend/SC_caracha_1.png" /> SC_caracha'
            });

        var lyr_EsriSatellite_2 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_p01_10_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'p01_10<br />\
    <img src="styles/legend/p01_10_3_0.png" /> 119.5587<br />\
    <img src="styles/legend/p01_10_3_1.png" /> 143.5345<br />\
    <img src="styles/legend/p01_10_3_2.png" /> 152.0661<br />\
    <img src="styles/legend/p01_10_3_3.png" /> 159.8652<br />\
    <img src="styles/legend/p01_10_3_4.png" /> 174.9874<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/p01_10_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8325201.848602, -1593472.529747, -8271604.545496, -1548914.756644]
        })
    });
var lyr_p02_10_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'p02_10<br />\
    <img src="styles/legend/p02_10_4_0.png" /> 129.2998<br />\
    <img src="styles/legend/p02_10_4_1.png" /> 142.3044<br />\
    <img src="styles/legend/p02_10_4_2.png" /> 155.3090<br />\
    <img src="styles/legend/p02_10_4_3.png" /> 168.3135<br />\
    <img src="styles/legend/p02_10_4_4.png" /> 181.3181<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/p02_10_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8325201.848602, -1593472.529747, -8271604.545496, -1548914.756644]
        })
    });
var lyr_p03_10_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'p03_10<br />\
    <img src="styles/legend/p03_10_5_0.png" /> 124.8591<br />\
    <img src="styles/legend/p03_10_5_1.png" /> 137.7023<br />\
    <img src="styles/legend/p03_10_5_2.png" /> 150.5456<br />\
    <img src="styles/legend/p03_10_5_3.png" /> 163.3888<br />\
    <img src="styles/legend/p03_10_5_4.png" /> 176.2321<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/p03_10_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8325201.848602, -1593472.529747, -8271604.545496, -1548914.756644]
        })
    });
var lyr_p04_10_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'p04_10<br />\
    <img src="styles/legend/p04_10_6_0.png" /> 40.1766<br />\
    <img src="styles/legend/p04_10_6_1.png" /> 46.6416<br />\
    <img src="styles/legend/p04_10_6_2.png" /> 53.1065<br />\
    <img src="styles/legend/p04_10_6_3.png" /> 59.5715<br />\
    <img src="styles/legend/p04_10_6_4.png" /> 66.0364<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/p04_10_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8325201.848602, -1593472.529747, -8271604.545496, -1548914.756644]
        })
    });
var lyr_p05_10_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'p05_10<br />\
    <img src="styles/legend/p05_10_7_0.png" /> 14.9653<br />\
    <img src="styles/legend/p05_10_7_1.png" /> 17.7365<br />\
    <img src="styles/legend/p05_10_7_2.png" /> 20.5078<br />\
    <img src="styles/legend/p05_10_7_3.png" /> 23.2790<br />\
    <img src="styles/legend/p05_10_7_4.png" /> 26.0502<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/p05_10_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8325201.848602, -1593472.529747, -8271604.545496, -1548914.756644]
        })
    });
var lyr_p06_10_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'p06_10<br />\
    <img src="styles/legend/p06_10_8_0.png" /> 6.1426<br />\
    <img src="styles/legend/p06_10_8_1.png" /> 7.7237<br />\
    <img src="styles/legend/p06_10_8_2.png" /> 9.3049<br />\
    <img src="styles/legend/p06_10_8_3.png" /> 10.8861<br />\
    <img src="styles/legend/p06_10_8_4.png" /> 12.4673<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/p06_10_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8325201.848602, -1593472.529747, -8271604.545496, -1548914.756644]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_SC_caracha_1.setVisible(true);lyr_EsriSatellite_2.setVisible(true);lyr_p01_10_3.setVisible(true);lyr_p02_10_4.setVisible(true);lyr_p03_10_5.setVisible(true);lyr_p04_10_6.setVisible(true);lyr_p05_10_7.setVisible(true);lyr_p06_10_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SC_caracha_1,lyr_EsriSatellite_2,lyr_p01_10_3,lyr_p02_10_4,lyr_p03_10_5,lyr_p04_10_6,lyr_p05_10_7,lyr_p06_10_8];
lyr_SC_caracha_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'COMID': 'COMID', 'Tot_Drain_': 'Tot_Drain_', 'RegionHy': 'RegionHy', 'FID_Export': 'FID_Export', 'FID_Expo_1': 'FID_Expo_1', 'FID_Expo_2': 'FID_Expo_2', 'OBJECTID': 'OBJECTID', 'COMID_1': 'COMID_1', 'Tot_Drain1': 'Tot_Drain1', 'RegionHy_1': 'RegionHy_1', 'Shape_Leng': 'Shape_Leng', 'FID__micro': 'FID__micro', 'cat': 'cat', 'value': 'value', 'label': 'label', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Nombre_Mc': 'Nombre_Mc', });
lyr_SC_caracha_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'COMID': 'TextEdit', 'Tot_Drain_': 'TextEdit', 'RegionHy': 'TextEdit', 'FID_Export': 'TextEdit', 'FID_Expo_1': 'TextEdit', 'FID_Expo_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'COMID_1': 'TextEdit', 'Tot_Drain1': 'TextEdit', 'RegionHy_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FID__micro': 'TextEdit', 'cat': 'TextEdit', 'value': 'TextEdit', 'label': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nombre_Mc': 'TextEdit', });
lyr_SC_caracha_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'COMID': 'no label', 'Tot_Drain_': 'no label', 'RegionHy': 'no label', 'FID_Export': 'no label', 'FID_Expo_1': 'no label', 'FID_Expo_2': 'no label', 'OBJECTID': 'no label', 'COMID_1': 'no label', 'Tot_Drain1': 'no label', 'RegionHy_1': 'no label', 'Shape_Leng': 'no label', 'FID__micro': 'no label', 'cat': 'no label', 'value': 'no label', 'label': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Nombre_Mc': 'no label', });
lyr_SC_caracha_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});