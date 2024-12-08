
const Policy = () => {

    document.title = 'Movie Sphere | Policy';

    return (
        <div class="w-10/12 md:w-8/12 bg-gradient-to-tr from-orange-200 to-blue-200 my-10 container mx-auto p-5 md:p-20 rounded-2xl">
            <h1 class="text-3xl font-bold mb-6 text-center">Policies</h1>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
                <p class="text-gray-600 leading-relaxed">
                    Your privacy is important to us. At <span class="font-bold">MovieSphere</span>, we are committed to protecting your personal information. Any data collected, including your name, email, and viewing preferences, will be used solely to enhance your experience. We do not share your information with third parties without your consent.
                </p>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Terms of Service</h2>
                <ul class="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Access content for personal, non-commercial use only.</li>
                    <li>Do not share your account credentials with others.</li>
                    <li>Avoid any activities that might disrupt our platform or infringe upon copyright laws.</li>
                </ul>
                <p class="mt-2 text-gray-600 leading-relaxed">
                    Violation of these terms may result in account suspension or termination.
                </p>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Subscription Policy</h2>
                <ul class="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Subscriptions are billed monthly or annually, depending on your plan.</li>
                    <li>Users can cancel their subscriptions at any time; however, refunds are not available for the current billing cycle.</li>
                    <li>Your subscription will auto-renew unless canceled before the renewal date.</li>
                </ul>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Content Policy</h2>
                <p class="text-gray-600 leading-relaxed">
                    We offer a diverse library of movies and series. While we strive to ensure all content is appropriate, some materials may not be suitable for children.
                    <span class="font-bold">Parental controls</span> are available to restrict access to such content.
                </p>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Refund Policy</h2>
                <p class="text-gray-600 leading-relaxed">
                    Refunds are issued only under exceptional circumstances, such as billing errors. To request a refund, please contact our support team within 7 days of the transaction.
                </p>
            </section>

            <section>
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Account Security</h2>
                <p class="text-gray-600 leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account credentials. Report any unauthorized activity immediately to avoid further issues.
                </p>
            </section>

            <section class="mt-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Updates to the Policy</h2>
                <p class="text-gray-600 leading-relaxed">
                    We reserve the right to update our policies at any time. Users will be notified of significant changes via email or website notifications.
                </p>
            </section>
        </div>

    );
};

export default Policy;