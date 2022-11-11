import Layout from "../components/Layout";

export default function Support() {
    return (
        <Layout pageTitle="Support">
            <main className="mx-7 md:mx-28 lg:mx-52 mt-4">
                <h1 className="text-4xl lg:text-5xl my-5">Support Me 💖</h1>
                <p>
                    Hi, thank you for comming here. Your supports means a lot for
                    me to keep my existing project alive and updated.
                </p>
                <p> You can support me via:</p>
                <ul className="list-disc list-inside mt-3">
                    <li>
                        <a
                            className="text-blue-700 dark:text-blue-400 hover:underline"
                            href="https://saweria.co/mrmiss"
                            rel="nofollow"
                        >
                            Saweria
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-blue-700 dark:text-blue-400 hover:underline"
                            href="https://www.paypal.me/gaungr"
                            rel="nofollow"
                        >
                            Paypal
                        </a>
                    </li>
                    <li>
                        Bitcoin:{" "}
                        <span className="text-blue-700 dark:text-blue-400 break-all">
                            bc1q9wqkuev0xle04vfcuqtq9r6s7ywl6nq5ejdj66
                        </span>
                    </li>
                    <li>
                        Ethereum (includes layer-2 and other EVM&apos;s compatible):{" "}
                        <ul className="list-disc list-inside pl-5">
                            <li>
                                ENS:{" "}
                                <span className="text-blue-700 dark:text-blue-400">
                                    mrmissx.eth
                                </span>
                            </li>
                            <li>
                                or with the address:{" "}
                                <span className="text-blue-700 dark:text-blue-400 break-all">
                                    0x9e4b58fD32218683E68574F2dd948eCc624aC1f8
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </main>
        </Layout>
    );
}
