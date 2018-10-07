export default
{
  "location": "t-junction",
  "sublocation": "none",
  "nodes": [
    {
      "name": "left-bottom",
      "x": 6.0,
      "y": 12.5,
      "x1": 5.4,
      "y1": 11.7,
      "x2": 7.4,
      "y2": 11.7,
      "x3": 7.4,
      "y3": 13.0,
      "x4": 5.4,
      "y4": 13.0
    },
    {
      "name": "left-top",
      "x": 6.0,
      "y": 12.5,
      "x1": 5.4,
      "y1": 14,
      "x2": 7.4,
      "y2": 14,
      "x3": 7.4,
      "y3": 15.3,
      "x4": 5.4,
      "y4": 15.3
    },
    {
      "name": "right-bottom",
      "x": 6.0,
      "y": 12.5,
      "x1": 27.6,
      "y1": 11.7,
      "x2": 29.6,
      "y2": 11.7,
      "x3": 29.6,
      "y3": 13,
      "x4": 27.6,
      "y4": 13
    },
    {
      "name": "right-top",
      "x": 6.0,
      "y": 12.5,
      "x1": 27.6,
      "y1": 14,
      "x2": 29.6,
      "y2": 14,
      "x3": 29.6,
      "y3": 15.3,
      "x4": 27.6,
      "y4": 15.3
    },
    {
      "name": "top",
      "x": 6.0,
      "y": 12.5,
      "x1": 16.4,
      "y1": 23.6,
      "x2": 18.6,
      "y2": 23.6,
      "x3": 18.6,
      "y3": 25.6,
      "x4": 16.4,
      "y4": 25.6
    },
    {
      "name": "bottom",
      "x": 6.0,
      "y": 12.5,
      "x1": 16.4,
      "y1": 1.4,
      "x2": 18.6,
      "y2": 1.4,
      "x3": 18.6,
      "y3": 3.4,
      "x4": 16.4,
      "y4": 3.4
    },
    {
      "name": "junction",
      "x": 6.0,
      "y": 12.5,
      "x1": 16.2,
      "y1": 11.9,
      "x2": 18.8,
      "y2": 11.9,
      "x3": 18.8,
      "y3": 15.1,
      "x4": 16.2,
      "y4": 15.1
    },
    {
      "name": "gate-top",
      "x": 6.0,
      "y": 12.5,
      "x1": 16,
      "y1": 17,
      "x2": 19,
      "y2": 17,
      "x3": 19,
      "y3": 17.9,
      "x4": 16,
      "y4": 17.9
    },
    {
      "name": "gate-bottom",
      "x": 6.0,
      "y": 12.5,
      "x1": 16,
      "y1": 16,
      "x2": 19,
      "y2": 16,
      "x3": 19,
      "y3": 16.9,
      "x4": 16,
      "y4": 16.9
    },
    {
      "name": "gate-bottom-top",
      "x": 6.0,
      "y": 12.5,
      "x1": 16,
      "y1": 10.1,
      "x2": 19,
      "y2": 10.1,
      "x3": 19,
      "y3": 11,
      "x4": 16,
      "y4": 11
    },
    {
      "name": "gate-bottom-bottom",
      "x": 6.0,
      "y": 12.5,
      "x1": 16,
      "y1": 9,
      "x2": 19,
      "y2": 9,
      "x3": 19,
      "y3": 10,
      "x4": 16,
      "y4": 10
    }
  ],
  "connectivity": [
    {
      "node": "right-top",
      "connected_to": [
        "junction"
      ]
    },
    {
      "node": "right-bottom",
      "connected_to": []
    },
    {
      "node": "left-top",
      "connected_to": []
    },
    {
      "node": "left-bottom",
      "connected_to": [
        "junction"
      ]
    },
    {
      "node": "top",
      "connected_to": [
        "gate-top"
      ]
    },
    {
      "node": "junction",
      "connected_to": [
        "gate-bottom",
        "left-top",
        "right-bottom",
        "gate-bottom-top"
      ]
    },
    {
      "node": "gate-top",
      "connected_to": [
        "gate-bottom",
        "top"
      ]
    },
    {
      "node": "gate-bottom",
      "connected_to": [
        "junction",
        "gate-top"
      ]
    },
    {
      "node": "bottom",
      "connected_to": [
        "gate-bottom-bottom"
      ]
    },
    {
      "node": "gate-bottom-bottom",
      "connected_to": [
        "gate-bottom-top",
        "bottom"
      ]
    },
    {
      "node": "gate-bottom-top",
      "connected_to": [
        "junction",
        "gate-bottom-bottom"
      ]
    }
  ],
  "connectivity_level_change": [],
  "flow_gates": [
    {
      "o": "gate-top",
      "d": "gate-bottom",
      "start_pos_x": 19,
      "start_pos_y": 16.95,
      "end_pos_x": 16,
      "end_pos_y": 16.95,
      "controlled_area": "junction-monitor",
      "functional_form": "linear",
      "functional_parameters": [4.5, -0.1]
    },
    {
      "o": "gate-bottom-bottom",
      "d": "gate-bottom-top",
      "start_pos_x": 16,
      "start_pos_y": 10.05,
      "end_pos_x": 19,
      "end_pos_y": 10.05,
      "controlled_area": "junction-monitor",
      "functional_form": "linear",
      "functional_parameters": [4.5, -0.1]
    }
  ],

  "controlled_areas": [
    {
      "name": "junction-monitor",
      "x1": 15,
      "y1": 11.5,
      "x2": 20,
      "y2": 11.5,
      "x3": 20,
      "y3": 15.5,
      "x4": 15,
      "y4": 15.5,
      "target_density": 2.0
    }
  ],
  "binary_gates": [],
  "moving_walkways": [],
  "flow_separators": []

}
