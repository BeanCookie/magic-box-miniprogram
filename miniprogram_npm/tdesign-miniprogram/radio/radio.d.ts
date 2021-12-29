import { SuperComponent } from '../common/src/index';
export default class PullDownRefresh extends SuperComponent {
    externalClasses: string[];
    relations: {
        '../radio-group/radio-group': {
            type: "ancestor";
        };
    };
    options: {
        multipleSlots: boolean;
    };
    lifetimes: {
        attached(): void;
    };
    properties: import("./type").TdRadioProps;
    data: {
        active: boolean;
        classPrefix: string;
        classBasePrefix: string;
        customIcon: boolean;
        optionLinked: boolean;
        iconVal: any[];
    };
    methods: {
        onChange(e: any): void;
        handleInitStatus(): void;
        toggle(): void;
        changeActive(active: boolean): void;
        setDisabled(disabled: Boolean): void;
        setOptionLinked(linked: Boolean): void;
    };
}
