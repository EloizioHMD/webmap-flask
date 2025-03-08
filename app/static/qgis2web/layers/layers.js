var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UCCaatinga_2 = new ol.format.GeoJSON();
var features_UCCaatinga_2 = format_UCCaatinga_2.readFeatures(json_UCCaatinga_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UCCaatinga_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UCCaatinga_2.addFeatures(features_UCCaatinga_2);
var lyr_UCCaatinga_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UCCaatinga_2, 
                style: style_UCCaatinga_2,
                popuplayertitle: 'UC - Caatinga',
                interactive: true,
                title: '<img src="styles/legend/UCCaatinga_2.png" /> UC - Caatinga'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_UCCaatinga_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_UCCaatinga_2];
lyr_UCCaatinga_2.set('fieldAliases', {'NomeUC': 'NomeUC', 'Cnuc': 'Cnuc', 'CriacaoAno': 'CriacaoAno', 'AreaHaAlb': 'AreaHaAlb', 'PerimM': 'PerimM', 'CriacaoAto': 'CriacaoAto', 'EsferaAdm': 'EsferaAdm', 'SiglaCateg': 'SiglaCateg', 'GrupoUC': 'GrupoUC', 'UFAbrang': 'UFAbrang', 'BiomaIBGE': 'BiomaIBGE', 'BiomaCRL': 'BiomaCRL', 'GRegional': 'GRegional', 'FusoAbrang': 'FusoAbrang', 'NGI': 'NGI', 'abrev': 'abrev', 'EscalaUC': 'EscalaUC', 'Demarcacao': 'Demarcacao', });
lyr_UCCaatinga_2.set('fieldImages', {'NomeUC': 'TextEdit', 'Cnuc': 'TextEdit', 'CriacaoAno': 'TextEdit', 'AreaHaAlb': 'TextEdit', 'PerimM': 'TextEdit', 'CriacaoAto': 'TextEdit', 'EsferaAdm': 'TextEdit', 'SiglaCateg': 'TextEdit', 'GrupoUC': 'TextEdit', 'UFAbrang': 'TextEdit', 'BiomaIBGE': 'TextEdit', 'BiomaCRL': 'TextEdit', 'GRegional': 'TextEdit', 'FusoAbrang': 'TextEdit', 'NGI': 'TextEdit', 'abrev': 'TextEdit', 'EscalaUC': 'TextEdit', 'Demarcacao': 'TextEdit', });
lyr_UCCaatinga_2.set('fieldLabels', {'NomeUC': 'inline label - always visible', 'Cnuc': 'no label', 'CriacaoAno': 'no label', 'AreaHaAlb': 'no label', 'PerimM': 'no label', 'CriacaoAto': 'no label', 'EsferaAdm': 'no label', 'SiglaCateg': 'no label', 'GrupoUC': 'no label', 'UFAbrang': 'no label', 'BiomaIBGE': 'no label', 'BiomaCRL': 'no label', 'GRegional': 'no label', 'FusoAbrang': 'no label', 'NGI': 'no label', 'abrev': 'no label', 'EscalaUC': 'no label', 'Demarcacao': 'no label', });
lyr_UCCaatinga_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});