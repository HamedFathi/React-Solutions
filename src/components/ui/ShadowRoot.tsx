import React from "react";

/*
<ShadowRoot>
    // put stuff here you want inside shadow root
</ShadowRoot>
*/
export class ShadowRoot extends React.Component {

    attachShadow(host: any) {
        if (host == null) {
            return;
        }
        host.attachShadow({ mode: "open" });
        host.shadowRoot.innerHTML = host.innerHTML;
        host.innerHTML = "";
    }

    render() {
        return (
            <span ref={this.attachShadow}>
                {this.props.children}
            </span>
        );
    }

}