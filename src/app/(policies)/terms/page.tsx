export default function Terms() {
    return (
        <section className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
                Terms and Conditions
            </h1>
            <h3>
                <strong>Last Updated: September 16, 2023</strong>
            </h3>
            <div className="flex flex-col gap-5 max-w-5xl leading-normal sm:text-xl sm:leading-8 text-justify">
                <h2 className="font-bold">1. Acceptance of Terms</h2>
                <p>
                    By accessing or using the Service, you affirm that you are
                    of legal age to enter into this agreement, or if you are a
                    minor, that you have obtained parental or guardian consent
                    to use the Service.
                </p>

                <h2 className="font-bold">2. User Registration</h2>
                <p>
                    2.1. To access the Service, you must log in using your
                    GitHub account credentials. You are responsible for
                    maintaining the confidentiality of your login information.
                </p>
                <p>
                    2.2. You agree to provide accurate, current, and complete
                    information during the registration process and to update
                    such information to keep it accurate, current, and complete.
                </p>
                <p>
                    2.3. You may not share your login credentials or allow
                    others to access your account.
                </p>

                <h2 className="font-bold">3. Service Description</h2>
                <p>
                    3.1. LeetTrack provides a Chrome extension that allows users
                    to log their LeetCode questions directly from the extension.
                </p>
                <p>
                    3.2. The logged questions will be displayed in a table on
                    your dashboard in the web application, along with data
                    visualizations such as time graphs, topic frequencies, and
                    difficulty ratios.
                </p>
                <p>
                    3.3. LeetTrack may update or modify the Service at its
                    discretion and may add or remove features without prior
                    notice.
                </p>

                <h2 className="font-bold">10. Governing Law</h2>
                <p>
                    These Terms shall be governed by and construed in accordance
                    with the laws of Australia.
                </p>

                <h2 className="font-bold">11. Contact Information</h2>
                <p>
                    If you have any questions or concerns about these Terms,
                    please contact us at [Contact Email Address].
                </p>

                <p>
                    By using the LeetTrack Service, you acknowledge that you
                    have read, understood, and agreed to these Terms and
                    Conditions. LeetTrack reserves the right to modify or update
                    these Terms at any time. It is your responsibility to review
                    these Terms periodically for changes. Your continued use of
                    the Service after any changes to these Terms will constitute
                    your acceptance of those changes.
                </p>
            </div>
        </section>
    );
}
