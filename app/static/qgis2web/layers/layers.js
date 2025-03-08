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
var format_limites_ucs_federais_27022025_a_1 = new ol.format.GeoJSON();
var features_limites_ucs_federais_27022025_a_1 = format_limites_ucs_federais_27022025_a_1.readFeatures(json_limites_ucs_federais_27022025_a_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limites_ucs_federais_27022025_a_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limites_ucs_federais_27022025_a_1.addFeatures(features_limites_ucs_federais_27022025_a_1);
var lyr_limites_ucs_federais_27022025_a_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limites_ucs_federais_27022025_a_1, 
                style: style_limites_ucs_federais_27022025_a_1,
                popuplayertitle: 'limites_ucs_federais_27022025_a',
                interactive: true,
                title: '<img src="styles/legend/limites_ucs_federais_27022025_a_1.png" /> limites_ucs_federais_27022025_a'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_limites_ucs_federais_27022025_a_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_limites_ucs_federais_27022025_a_1];
lyr_limites_ucs_federais_27022025_a_1.set('fieldAliases', {'NomeUC': 'NomeUC', 'Cnuc': 'Cnuc', 'CriacaoAno': 'CriacaoAno', 'AreaHaAlb': 'AreaHaAlb', 'PerimM': 'PerimM', 'CriacaoAto': 'CriacaoAto', 'EsferaAdm': 'EsferaAdm', 'SiglaCateg': 'SiglaCateg', 'GrupoUC': 'GrupoUC', 'UFAbrang': 'UFAbrang', 'BiomaIBGE': 'BiomaIBGE', 'BiomaCRL': 'BiomaCRL', 'GRegional': 'GRegional', 'FusoAbrang': 'FusoAbrang', 'NGI': 'NGI', 'abrev': 'abrev', 'EscalaUC': 'EscalaUC', 'Demarcacao': 'Demarcacao', });
lyr_limites_ucs_federais_27022025_a_1.set('fieldImages', {'NomeUC': 'TextEdit', 'Cnuc': 'TextEdit', 'CriacaoAno': 'TextEdit', 'AreaHaAlb': 'TextEdit', 'PerimM': 'TextEdit', 'CriacaoAto': 'TextEdit', 'EsferaAdm': 'TextEdit', 'SiglaCateg': 'TextEdit', 'GrupoUC': 'TextEdit', 'UFAbrang': 'TextEdit', 'BiomaIBGE': 'TextEdit', 'BiomaCRL': 'TextEdit', 'GRegional': 'TextEdit', 'FusoAbrang': 'TextEdit', 'NGI': 'TextEdit', 'abrev': 'TextEdit', 'EscalaUC': 'TextEdit', 'Demarcacao': 'TextEdit', });
lyr_limites_ucs_federais_27022025_a_1.set('fieldLabels', {'NomeUC': 'inline label - always visible', 'Cnuc': 'no label', 'CriacaoAno': 'no label', 'AreaHaAlb': 'no label', 'PerimM': 'no label', 'CriacaoAto': 'no label', 'EsferaAdm': 'no label', 'SiglaCateg': 'no label', 'GrupoUC': 'no label', 'UFAbrang': 'no label', 'BiomaIBGE': 'no label', 'BiomaCRL': 'no label', 'GRegional': 'no label', 'FusoAbrang': 'no label', 'NGI': 'no label', 'abrev': 'no label', 'EscalaUC': 'no label', 'Demarcacao': 'no label', });
lyr_limites_ucs_federais_27022025_a_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});