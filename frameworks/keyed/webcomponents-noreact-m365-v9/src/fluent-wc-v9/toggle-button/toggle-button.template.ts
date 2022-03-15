import { html, ref, slotted } from "@microsoft/fast-element";
import type { ToggleButton } from "./toggle-button";

/**
 * The template for the {@link @microsoft/fast-foundation#(Button:class)} component.
 * @public
 */
export const buttonTemplate = html<ToggleButton>`
    <button
        class="base"
        part="base"
        ?autofocus="${x => x.autofocus}"
        ?disabled="${x => x.disabled}"
        tabindex="${x => x.disabledFocusable ? "0" : !!x.tabIndex || void 0}"
        form="${x => x.formId}"
        formaction="${x => x.formaction}"
        formenctype="${x => x.formenctype}"
        formmethod="${x => x.formmethod}"
        formnovalidate="${x => x.formnovalidate}"
        formtarget="${x => x.formtarget}"
        name="${x => x.name}"
        type="${x => x.type}"
        value="${x => x.value}"
        aria-atomic="${x => x.ariaAtomic}"
        aria-busy="${x => x.ariaBusy}"
        aria-controls="${x => x.ariaControls}"
        aria-current="${x => x.ariaCurrent}"
        aria-describedby="${x => x.ariaDescribedby}"
        aria-details="${x => x.ariaDetails}"
        aria-disabled="${x => x.disabledFocusable === true ? "true" : x.ariaDisabled}"
        aria-errormessage="${x => x.ariaErrormessage}"
        aria-expanded="${x => x.ariaExpanded}"
        aria-flowto="${x => x.ariaFlowto}"
        aria-haspopup="${x => x.ariaHaspopup}"
        aria-hidden="${x => x.ariaHidden}"
        aria-invalid="${x => x.ariaInvalid}"
        aria-keyshortcuts="${x => x.ariaKeyshortcuts}"
        aria-label="${x => x.ariaLabel}"
        aria-labelledby="${x => x.ariaLabelledby}"
        aria-live="${x => x.ariaLive}"
        aria-owns="${x => x.ariaOwns}"
        aria-pressed="${x => x.checked || x.ariaPressed}"
        aria-relevant="${x => x.ariaRelevant}"
        aria-roledescription="${x => x.ariaRoledescription}"
        @keypress="${(x, c) => x.keypressHandler(c.event as KeyboardEvent)}"
        @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
        ${ref("control")}
    >
        <slot name="start"></slot>
        <slot ${slotted("defaultSlottedContent")}></slot>
        <slot name="end"></slot>
    </button>
`;
