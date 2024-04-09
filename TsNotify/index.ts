import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { NotificationComponent } from "./components/NotificationComponent";
import { INotificationProps } from "./components/NotificationProps";
import * as React from "react";

export class TsNotify implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;
    private value: string;

    constructor() { }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const messageText = context.parameters.messageText.raw || '';
        const props: INotificationProps = { 
            messageText: messageText,
            duration: context.parameters.duration.raw || 4000,
            type: context.parameters.type.raw || 'Success'
        };

        
        if (context.updatedProperties.includes("messageText") && messageText.trim() !== "") {
            this.value = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            this.notifyOutputChanged();
        }

        return React.createElement(
            NotificationComponent, props
        );
    }
    
    public getOutputs(): IOutputs {
        return { value: this.value };
    }

    public destroy(): void {

    }
}