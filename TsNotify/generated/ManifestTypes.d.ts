/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    messageText: ComponentFramework.PropertyTypes.StringProperty;
    duration: ComponentFramework.PropertyTypes.WholeNumberProperty;
    type: ComponentFramework.PropertyTypes.EnumProperty<"Success" | "Error" | "Standard">;
}
export interface IOutputs {
    value?: string;
}
