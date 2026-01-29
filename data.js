var APP_DATA = {
  "scenes": [
    {
      "id": "0-grab-and-go",
      "name": "Grab And Go",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.614152551789351,
          "pitch": 0.3285290207926579,
          "rotation": 0,
          "target": "1-below-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2735109262652742,
          "pitch": 0.3501701831126507,
          "title": "<div>Drink</div>",
          "text": "Text"
        },
        {
          "yaw": 0.23871197582039017,
          "pitch": 0.13432032513325254,
          "title": "Main Food",
          "text": "Text"
        },
        {
          "yaw": 0.9383373291333275,
          "pitch": 0.0869746830169813,
          "title": "<div>Snacks</div>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-below-stairs",
      "name": "Below Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2461162770055747,
          "pitch": 0.1709993466350106,
          "rotation": 0,
          "target": "0-grab-and-go"
        },
        {
          "yaw": 1.5835891065488283,
          "pitch": 0.14581787142302005,
          "rotation": 0,
          "target": "2-storms-a-brewing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-storms-a-brewing",
      "name": "Storms A Brewing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.8068156597054479,
        "pitch": -0.0012951490272516963,
        "fov": 1.4337299731675692
      },
      "linkHotspots": [
        {
          "yaw": 1.3911090893446456,
          "pitch": 0.21702635872752474,
          "rotation": 0,
          "target": "1-below-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4585564505291959,
          "pitch": -0.20451551754229946,
          "title": "Coffee Shop",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
