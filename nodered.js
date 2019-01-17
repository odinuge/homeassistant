[
    {
        "id": "59d07969.25f1a8",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": ""
    },
    {
        "id": "18861a86.ba07a5",
        "type": "server-state-changed",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "entityidfilter": "input_boolean.fake",
        "entityidfiltertype": "exact",
        "outputinitially": false,
        "state_type": "str",
        "haltifstate": "off",
        "halt_if_type": "",
        "halt_if_compare": "is",
        "outputs": 2,
        "x": 164.49998474121094,
        "y": 289.59999084472656,
        "wires": [
            [
                "edde0d09.8d0008"
            ],
            []
        ]
    },
    {
        "id": "edde0d09.8d0008",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "light",
        "service": "turn_on",
        "data": "{\"white_value\":0}",
        "render_data": false,
        "mergecontext": "",
        "output_location": "",
        "output_location_type": "none",
        "x": 525.4999847412109,
        "y": 292.3999938964844,
        "wires": [
            [
                "12585052.fd96d"
            ]
        ]
    },
    {
        "id": "12585052.fd96d",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "light",
        "service": "turn_on",
        "data": "{\"entity_id\":\"light.sofa\",\"effect\":\"white_strobe\"}",
        "render_data": false,
        "mergecontext": "",
        "output_location": "",
        "output_location_type": "none",
        "x": 874.4999847412109,
        "y": 286.3999938964844,
        "wires": [
            [
                "259bc21c.658586"
            ]
        ]
    },
    {
        "id": "259bc21c.658586",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "input_boolean",
        "service": "turn_off",
        "data": "{\"entity_id\":\"input_boolean.fake\"}",
        "render_data": false,
        "mergecontext": "",
        "output_location": "",
        "output_location_type": "none",
        "x": 850.5,
        "y": 377.40000915527344,
        "wires": [
            []
        ]
    },
    {
        "id": "dbf0107.7fa837",
        "type": "inject",
        "z": "59d07969.25f1a8",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "60",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 93.5,
        "y": 470.7999725341797,
        "wires": [
            [
                "bcb7b1ea.4d54a"
            ]
        ]
    },
    {
        "id": "bcb7b1ea.4d54a",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "input_boolean.heater_auto_on",
        "state_type": "str",
        "outputs": 2,
        "x": 362.49998474121094,
        "y": 468.6000213623047,
        "wires": [
            [
                "3196bca.6beccc4"
            ],
            []
        ]
    },
    {
        "id": "3196bca.6beccc4",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "input_datetime.only_time",
        "state_type": "str",
        "outputs": 1,
        "x": 728.5,
        "y": 461.4000244140625,
        "wires": [
            [
                "86c0d03e.3f5468"
            ]
        ]
    },
    {
        "id": "86c0d03e.3f5468",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "date = new Date()\ncurrenthours = (date.getHours()).toString()\ncurrentminutes = date.getMinutes().toString()\n\nstarthours = msg.payload.substring(0,2)\nstartminutes = msg.payload.substring(3,5)\nendhours = Number(starthours)\nendminutes = Number(startminutes)+20\nif (endminutes > 59) {\n    endminutes-= 60\n    endhours++\n}\ncurrent = currenthours+currentminutes\nstart = starthours+startminutes\nend = endhours.toString()+endminutes.toString()\n\nendhours = endhours.toString()\nendminutes = endminutes.toString()\n\n\n\nmsg.payload = 1\n\nif (Number(current) < Number(start) || Number(current) > Number(end)) {\n    msg.payload = 0\n}\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 182.49998474121094,
        "y": 549.6000213623047,
        "wires": [
            [
                "102e4c28.36137c"
            ]
        ]
    },
    {
        "id": "102e4c28.36137c",
        "type": "switch",
        "z": "59d07969.25f1a8",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "1",
                "vt": "num"
            },
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 354.49998474121094,
        "y": 543.4000091552734,
        "wires": [
            [
                "c2859f6e.90579"
            ],
            [
                "8b4c1a9.55fbb68"
            ]
        ]
    },
    {
        "id": "ef7b2d3a.6a961",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "switch",
        "service": "turn_on",
        "data": "{\"entity_id\":\"switch.heater\"}",
        "render_data": false,
        "mergecontext": "",
        "output_location": "payload",
        "output_location_type": "msg",
        "x": 840.5,
        "y": 559.4000244140625,
        "wires": [
            []
        ]
    },
    {
        "id": "f757b829.955aa8",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "switch",
        "service": "turn_off",
        "data": "{\"entity_id\":\"switch.heater\"}",
        "render_data": false,
        "mergecontext": "",
        "output_location": "payload",
        "output_location_type": "msg",
        "x": 847.5,
        "y": 625.4000244140625,
        "wires": [
            []
        ]
    },
    {
        "id": "c2859f6e.90579",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "on",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "switch.heater",
        "state_type": "str",
        "outputs": 2,
        "x": 588.5,
        "y": 553.4000244140625,
        "wires": [
            [
                "ef7b2d3a.6a961"
            ],
            []
        ]
    },
    {
        "id": "8b4c1a9.55fbb68",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "switch.heater",
        "state_type": "str",
        "outputs": 2,
        "x": 614.4999847412109,
        "y": 622.4000091552734,
        "wires": [
            [
                "f757b829.955aa8"
            ],
            []
        ]
    },
    {
        "id": "13e47a89.e57c5d",
        "type": "server-events",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "event_type": "deconz_event",
        "x": 160.5,
        "y": 648.9999694824219,
        "wires": [
            [
                "4bddcc5b.eafd34"
            ]
        ]
    },
    {
        "id": "4bddcc5b.eafd34",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "msg.payload = msg.payload.event.event\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 161.49998474121094,
        "y": 749.3999938964844,
        "wires": [
            [
                "42204ca1.5babbc"
            ]
        ]
    },
    {
        "id": "42204ca1.5babbc",
        "type": "switch",
        "z": "59d07969.25f1a8",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "2002",
                "vt": "num"
            },
            {
                "t": "eq",
                "v": "4002",
                "vt": "num"
            },
            {
                "t": "eq",
                "v": "5002",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "3002",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "1002",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "3003",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 6,
        "x": 121.49998474121094,
        "y": 943.2000427246094,
        "wires": [
            [
                "3d1aeff1.fd387",
                "6a289d14.0cebb4",
                "bb1a9d94.fdcc9"
            ],
            [
                "8ec8b55f.d4fd7"
            ],
            [
                "ea1d4261.afe948"
            ],
            [
                "26f5b982.e3affe",
                "4e807c57.c00f54",
                "d36538b9.fc3c6"
            ],
            [
                "531d68dd.8f69c8"
            ],
            [
                "74a012b5.bcaa04",
                "bd6e91b3.6915d8",
                "ff5b68b7.69fdc8"
            ]
        ]
    },
    {
        "id": "ea1d4261.afe948",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "media_player",
        "service": "media_next_track",
        "data": "{\"entity_id\":\"media_player.spotify\"}",
        "render_data": false,
        "mergecontext": "",
        "output_location": "payload",
        "output_location_type": "msg",
        "x": 403.5,
        "y": 905.4000549316406,
        "wires": [
            []
        ]
    },
    {
        "id": "8ec8b55f.d4fd7",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "media_player",
        "service": "media_previous_track",
        "data": "{\"entity_id\":\"media_player.spotify\"}",
        "render_data": false,
        "mergecontext": "",
        "output_location": "payload",
        "output_location_type": "msg",
        "x": 411.20001220703125,
        "y": 860.4000549316406,
        "wires": [
            []
        ]
    },
    {
        "id": "2211eebc.fecb0a",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "media_player",
        "service": "volume_up",
        "data": "{\"entity_id\":\"media_player.music_surround\"}",
        "render_data": false,
        "mergecontext": "",
        "output_location": "payload",
        "output_location_type": "msg",
        "x": 1317.199951171875,
        "y": 783.4000549316406,
        "wires": [
            []
        ]
    },
    {
        "id": "531d68dd.8f69c8",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "media_player",
        "service": "media_play_pause",
        "data": "{\"entity_id\":\"media_player.spotify\"}",
        "render_data": false,
        "mergecontext": "",
        "output_location": "payload",
        "output_location_type": "msg",
        "x": 376.20001220703125,
        "y": 952.4000549316406,
        "wires": [
            []
        ]
    },
    {
        "id": "39d302b2.7eb9d6",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "msg.payload.entity_id=\"media_player.home\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1089.5,
        "y": 735.6000061035156,
        "wires": [
            [
                "2211eebc.fecb0a"
            ]
        ]
    },
    {
        "id": "26eca65d.14a282",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "media_player",
        "service": "volume_down",
        "data": "",
        "render_data": false,
        "mergecontext": "",
        "output_location": "payload",
        "output_location_type": "msg",
        "x": 1335.2000122070312,
        "y": 913.4000549316406,
        "wires": [
            []
        ]
    },
    {
        "id": "3d1aeff1.fd387",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "media_player.home",
        "state_type": "str",
        "outputs": 2,
        "x": 814.5,
        "y": 748.4000549316406,
        "wires": [
            [
                "39d302b2.7eb9d6"
            ],
            []
        ]
    },
    {
        "id": "8527932d.56f0d",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "msg.payload.entity_id=\"media_player.kitchen_speaker\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1106.199951171875,
        "y": 785.6000061035156,
        "wires": [
            [
                "2211eebc.fecb0a"
            ]
        ]
    },
    {
        "id": "6a289d14.0cebb4",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "media_player.kitchen_speaker",
        "state_type": "str",
        "outputs": 2,
        "x": 845.2000122070312,
        "y": 796.4000549316406,
        "wires": [
            [
                "8527932d.56f0d"
            ],
            []
        ]
    },
    {
        "id": "8ee6cd11.1dec4",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "msg.payload.entity_id=\"media_player.music_surround\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1101,
        "y": 835.6000061035156,
        "wires": [
            [
                "2211eebc.fecb0a"
            ]
        ]
    },
    {
        "id": "bb1a9d94.fdcc9",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "media_player.music_surround",
        "state_type": "str",
        "outputs": 2,
        "x": 834,
        "y": 840.4000549316406,
        "wires": [
            [
                "8ee6cd11.1dec4"
            ],
            []
        ]
    },
    {
        "id": "e8c2e935.e0c978",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "msg.payload.entity_id=\"media_player.home\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1090,
        "y": 895.4000549316406,
        "wires": [
            [
                "26eca65d.14a282"
            ]
        ]
    },
    {
        "id": "26f5b982.e3affe",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "media_player.home",
        "state_type": "str",
        "outputs": 2,
        "x": 815,
        "y": 908.2001037597656,
        "wires": [
            [
                "e8c2e935.e0c978"
            ],
            []
        ]
    },
    {
        "id": "b5160845.e78a1",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "msg.payload.entity_id=\"media_player.kitchen_speaker\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1106.699951171875,
        "y": 945.4000549316406,
        "wires": [
            [
                "26eca65d.14a282"
            ]
        ]
    },
    {
        "id": "4e807c57.c00f54",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "media_player.kitchen_speaker",
        "state_type": "str",
        "outputs": 2,
        "x": 845.7000122070312,
        "y": 956.2001037597656,
        "wires": [
            [
                "b5160845.e78a1"
            ],
            []
        ]
    },
    {
        "id": "b80aebf3.8d5dc",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "msg.payload.entity_id=\"media_player.music_surround\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1101.5,
        "y": 995.4000549316406,
        "wires": [
            [
                "26eca65d.14a282"
            ]
        ]
    },
    {
        "id": "d36538b9.fc3c6",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "media_player.music_surround",
        "state_type": "str",
        "outputs": 2,
        "x": 834.5,
        "y": 1000.2001037597656,
        "wires": [
            [
                "b80aebf3.8d5dc"
            ],
            []
        ]
    },
    {
        "id": "effd8e18.42b07",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "msg.payload.entity_id=\"media_player.home\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 628,
        "y": 1057.4000244140625,
        "wires": [
            [
                "34053a9a.e9a1b6"
            ]
        ]
    },
    {
        "id": "74a012b5.bcaa04",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "media_player.home",
        "state_type": "str",
        "outputs": 2,
        "x": 353,
        "y": 1070.2000732421875,
        "wires": [
            [
                "effd8e18.42b07"
            ],
            []
        ]
    },
    {
        "id": "8f2caa94.6be88",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "msg.payload.entity_id=\"media_player.kitchen_speaker\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 644.699951171875,
        "y": 1107.4000244140625,
        "wires": [
            [
                "34053a9a.e9a1b6"
            ]
        ]
    },
    {
        "id": "bd6e91b3.6915d8",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "media_player.kitchen_speaker",
        "state_type": "str",
        "outputs": 2,
        "x": 383.70001220703125,
        "y": 1118.2000732421875,
        "wires": [
            [
                "8f2caa94.6be88"
            ],
            []
        ]
    },
    {
        "id": "63562195.7d926",
        "type": "function",
        "z": "59d07969.25f1a8",
        "name": "",
        "func": "msg.payload.entity_id=\"media_player.music_surround\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 639.5,
        "y": 1157.4000244140625,
        "wires": [
            [
                "34053a9a.e9a1b6"
            ]
        ]
    },
    {
        "id": "ff5b68b7.69fdc8",
        "type": "api-current-state",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "halt_if": "off",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "override_topic": true,
        "override_payload": true,
        "override_data": true,
        "entity_id": "media_player.music_surround",
        "state_type": "str",
        "outputs": 2,
        "x": 372.5,
        "y": 1162.2000732421875,
        "wires": [
            [
                "63562195.7d926"
            ],
            []
        ]
    },
    {
        "id": "34053a9a.e9a1b6",
        "type": "api-call-service",
        "z": "59d07969.25f1a8",
        "name": "",
        "server": "59d7c12.5326f4",
        "service_domain": "media_player",
        "service": "volume_set",
        "data": "{\"volume_level\":0.1}",
        "render_data": false,
        "mergecontext": "",
        "output_location": "payload",
        "output_location_type": "msg",
        "x": 918,
        "y": 1115.4000549316406,
        "wires": [
            []
        ]
    },
    {
        "id": "59d7c12.5326f4",
        "type": "server",
        "z": "",
        "name": "Home Assistant"
    }
]
