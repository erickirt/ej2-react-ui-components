import { ComplexBase } from '@syncfusion/ej2-react-base';
import { PointerModel } from '@syncfusion/ej2-lineargauge';


/**
 * Represents the directive to render and customize the pointers in an axis of linear gauge.
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <PointersDirective>
 * <PointerDirective></PointerDirective>
 * </PointersDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
export class PointerDirective extends ComplexBase<PointerModel & { children?: React.ReactNode }, PointerModel> {
    public static moduleName: string = 'pointer';
}

export class PointersDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'pointers';
    public static moduleName: string = 'pointers';
}
