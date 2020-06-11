var obj = {
  "Structure": {
     "type": "Document",
     "documentType": "document",
     "componentProperties": {

     },
     "themeData": {

     },
     "children": [
        {
           "type": "Container",
           "styleId": "style-ish4oam6",
           "id": "SITE_HEADER",
           "components": [
              {
                 "type": "Component",
                 "styleId": "style-jliasy0h",
                 "id": "comp-ish43ju9",
                 "dataQuery": "#dataItem-j9nxzwid",
                 "skin": "wysiwyg.common.components.dropdownmenu.viewer.skins.SolidColorMenuButtonSkin",
                 "layout": {
                    "width": 396,
                    "height": 50,
                    "x": 511,
                    "y": 39,
                    "scale": 1,
                    "rotationInDegrees": 0,
                    "fixedPosition": false
                 },
                 "propertyQuery": "propItem-ish43jvj",
                 "componentType": "wysiwyg.viewer.components.menus.DropDownMenu"
              },
              {
                 "type": "Component",
                 "styleId": "style-j1xatrdl",
                 "id": "comp-it16i3ly",
                 "dataQuery": "#dataItem-it16i3m5",
                 "skin": "wysiwyg.viewer.skins.TPAWidgetSkin",
                 "layout": {
                    "width": 28,
                    "height": 34,
                    "x": 921,
                    "y": 44,
                    "scale": 1,
                    "rotationInDegrees": 0,
                    "fixedPosition": false
                 },
                 "componentType": "wysiwyg.viewer.components.tpapps.TPAWidget"
              },
              {
                 "type": "Component",
                 "styleId": "txtNew",
                 "id": "comp-isypcsil",
                 "dataQuery": "#dataItem-isypcsj9",
                 "layout": {
                    "width": 336,
                    "height": 55,
                    "x": 15,
                    "y": 39,
                    "scale": 1,
                    "rotationInDegrees": 0,
                    "fixedPosition": false
                 },
                 "propertyQuery": "propItem-isypcsj91",
                 "componentType": "wysiwyg.viewer.components.WRichText"
              }
           ]
        }
     ]
  }
}

obj = Object.assign(obj, { "TEST": "ADD" })

var myJSON = JSON.stringify(obj);

console.log(myJSON);
