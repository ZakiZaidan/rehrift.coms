export default function Nav({ children }) {
    return (
        <>
            <header>
                <div class="logo">
                    RETHRIFT<b>.</b>COMS
                </div>
                <nav class="nav nav3">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                            <ul>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Nav Item</a>
                            <ul>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Nav Item</a>
                            <ul>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Nav Item</a>
                            <ul>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Nav Item</a>
                            <ul>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                                <li>
                                    <a href="#">Subnav Item</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>

            <div>{children}</div>
        </>
    );
}
