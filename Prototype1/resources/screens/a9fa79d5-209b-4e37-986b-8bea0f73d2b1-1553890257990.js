jQuery("#simulation")
  .on("mouseenter dragenter", ".s-a9fa79d5-209b-4e37-986b-8bea0f73d2b1 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Login") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a9fa79d5-209b-4e37-986b-8bea0f73d2b1 #s-Login": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-a9fa79d5-209b-4e37-986b-8bea0f73d2b1 #s-Login": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-a9fa79d5-209b-4e37-986b-8bea0f73d2b1 #s-Login": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Signup") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a9fa79d5-209b-4e37-986b-8bea0f73d2b1 #s-Signup": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-a9fa79d5-209b-4e37-986b-8bea0f73d2b1 #s-Signup": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-a9fa79d5-209b-4e37-986b-8bea0f73d2b1 #s-Signup": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-a9fa79d5-209b-4e37-986b-8bea0f73d2b1 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Login")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Signup")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("windowresize", ".s-a9fa79d5-209b-4e37-986b-8bea0f73d2b1 .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-a9fa79d5-209b-4e37-986b-8bea0f73d2b1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"650" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f59703af-d6c7-442e-bf74-ed2f73529667"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"420" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-TRAVELSHARE_1" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "pincenter",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });