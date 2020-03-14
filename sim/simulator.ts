/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();
    };

    /**
     * Gets the current 'board', eg. program state.
     */
    export function board() : Board {
        return runtime.board as Board;
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard {
        public bus: EventBus;

        private chat: IChatView;
        
        constructor() {
            super();
            this.bus = new EventBus(runtime);
            this.chat = typeof document == "undefined" ? new ConsoleChatView() : new DomChatView();
        }
        
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
//            document.body.innerHTML = ''; // clear children
            this.chat.clear();

         
            this.chat.append("AlphaBot 2 Connected...");

            return Promise.resolve();
        }       
        
    //    updateView() {
    //    }
    }

    export interface IChatView {
        clear(): void;
        append(msg: string): void;
    }

    class ConsoleChatView implements IChatView {
        clear(): void {
            console.clear();
        }
        append(txt: string): void {
            console.log(txt);
        }
    }

    class DomChatView implements IChatView {
        private element: HTMLDivElement;
        constructor() {
            this.element = document.createElement("div") as HTMLDivElement;
            this.element.className = 'sim-log';
        }

        clear(): void {
            document.body.innerHTML = '';
            this.element.innerHTML = '';
            this.element.className = "sim-log";
            this.element.onclick = undefined;
            this.element.title = undefined;
            document.body.appendChild(this.element);
        }

        append(txt: string): void {
            const msg = document.createElement('div') as HTMLDivElement;
            msg.innerText = txt;
            while (this.element.childElementCount > 8) this.element.removeChild(this.element.firstElementChild);
            this.element.appendChild(msg);
        }
    }
}