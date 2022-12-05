sap.ui.define([], function () {
    "use strict";
  
    let _sIdPrefix;
    let _oTable;
  
    const oController = {
      onInit: function () {
        _sIdPrefix =
          "oup.otc.zotcbomratiocheck::sap.suite.ui.generic.template.ListReport.view.ListReport::zotc_c_price_ratio_valid--";
  
        // grid table
        _oTable = this.byId(_sIdPrefix + "GridTable");

        // set threshold to 5000
        _oTable.setThreshold(5000);
      },
  
      onAfterRendering: function () {
        _oTable.attachBusyStateChanged(this._onBusyStateChanged);
      },
  
      /* =========================================================== */
      /* internal methods                                            */
      /* =========================================================== */
  
      _onBusyStateChanged: function (oEvent) {
        const bBusy = oEvent.getParameter("busy");
  
        if (!bBusy) {
          let oTpc = null;
  
          // grid table
          if (sap.ui.table.TablePointerExtension) {
            oTpc = new sap.ui.table.TablePointerExtension(_oTable);
          } else {
            oTpc = new sap.ui.table.extensions.Pointer(_oTable);
          }
  
          // columns
          const aColumns = _oTable.getColumns();
          for (let i = aColumns.length; i >= 0; i--) {
            oTpc.doAutoResizeColumn(i);
          }

          // set column width
          aColumns[0].setWidth("150px"); // pack
          aColumns[8].setWidth("150px"); // component
          aColumns[9].setWidth("350px"); // component description
          aColumns[11].setWidth("150px"); // common code
          aColumns[12].setWidth("200px"); // common code description
        }
      },
    };
  
    return oController;
  });
  