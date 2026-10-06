let color = "yellow";
let action;

switch (color.toLowerCase()) {
    case "red":    action = "Stop";      break;
    case "yellow": action = "Get Ready"; break;
    case "green":  action = "Go";        break;
    default:       action = "Invalid color";
}

console.log(action);
