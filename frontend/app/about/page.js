export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">About Landslide Web App</h1>

      <p className="mb-4 text-gray-700">
        The Landslide Web Application is designed to provide timely information
        and alerts about landslide incidents across different regions.
      </p>

      <p className="mb-4 text-gray-700">
        Users can stay updated with:
      </p>

      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Latest verified landslide news and incidents</li>
        <li>Real-time risk alerts based on weather and rainfall</li>
        <li>Emergency notifications including safety instructions</li>
        <li>Alert history for reference and tracking</li>
      </ul>

      <p className="mb-4 text-gray-700">
        This app sources information from official organizations such as the
        Disaster Management Centre and provides accurate and timely alerts to
        help communities prepare and respond to landslide hazards.
      </p>

      <p className="text-gray-700">
        Built with Next.js, React, and MongoDB, this application aims to make
        disaster management information accessible and user-friendly.
      </p>
    </div>
  );
}
