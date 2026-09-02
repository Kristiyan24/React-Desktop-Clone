import dayjs from "dayjs";
import useWindowStore from "#stores/window";
import { navIcons, navLinks } from "#constants";

export default function Navbar() {
    const { openWindow } = useWindowStore();

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Apple Logo" />
                <p className="font-bold">Kishan Jograjiya's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img
                                src={img}
                                alt={`icon-${id}`}
                                className="icon"
                            />
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    );
}
