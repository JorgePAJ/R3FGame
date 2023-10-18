import StringToComponent from "./StringToComponent";

export default function StringArrayToComponents(arr) {
  const components = [];

  for (let i = 0; i < arr.length; i++) {
    const type = arr[i];
    components.push(StringToComponent(type));
  }

  return components;
}
