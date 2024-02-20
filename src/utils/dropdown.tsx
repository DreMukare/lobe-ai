import { Link } from 'react-router-dom';
import DropdownList from '../components/DropdownList';

const dropdownData = {
	welcome: [
		{
			titleText: 'What is Lobe?',
			content: (
				<>
					<p>
						Lobe is a free, private desktop application that has everything you
						need to take your machine learning ideas from prototype to
						production.
					</p>
					<DropdownList
						list={[
							<p>
								<Link to={'/label'}>Label</Link> your examples
							</p>,
							<p>
								<Link to={'/train'}>Train</Link> a model
							</p>,
							<p>
								Evaluate training <Link to={'/train'}>results</Link>
							</p>,
							<p>
								<Link to={'/train'}>Play</Link> with your model
							</p>,
							<p>
								<Link to={'/train'}>Export</Link> and use your model in an app
							</p>,
						]}
					/>
				</>
			),
		},
		{
			titleText: 'What is machine learning?',
			content: (
				<>
					<p>
						Machine learning is software that learns to perform a task from a collection of examples rather than through a
						person explicitly defining rules and formulas. This learning software is called a <strong>model</strong>. Teaching a model through
						examples is called <strong>training</strong>.
					</p>

					<p>
						Learn more in this <Link to={'https://aischool.microsoft.com/en-us/machine-learning/learning-paths/ml-crash-course'}>beginner crash course.</Link>
					</p>
				</>
			),
		},
		{
			titleText: 'What kind of machine learning can I train with Lobe?',
			content: (
				<>
					<p>
						This version of Lobe learns to look at images using <strong>image classification</strong> - categorizing an image into a single label overall. We are working to expand to more types of problems and data in future versions.
					</p>
				</>
			),
		},
		{
			titleText: 'What is image classification?',
			content: (
				<>
					<p>
						Image classification is categorizing an image into a single label to
						represent its content. Apps using image classification could:
					</p>
					<DropdownList
						list={[
							<p>
								Tell you when someone is coming up your front steps
							</p>,
							<p>
								Send you photos of a new bird that just started showing up at your bird feeder
							</p>,
							<p>
								Count the number of push-ups you’ve done in a workout
							</p>,
							<p>
								Alert you when a shelf is empty
							</p>,
							<p>
								Read signs in you environment
							</p>,
						]}
					/>
					<p>
						Lobe is not doing any reasoning or understanding of the content in your images.
						Image classification learns to find any patterns from your images - things like textures,
						colors, and shapes - that can be used to separate your labels.
					</p>
					<p>
						See <Link to={'/help/label'}>Label</Link> to help Lobe learn the correct patterns.
					</p>
				</>
			),
		},
		{
			titleText: 'How do I use my model?',
			content: (
				<>
					<p>
						A model is a piece of code. You can export your model into a variety of industry-standard formats
						to run on Mac and Windows, the web, or mobile and edge devices. You can also export and use your
						model in <Link to={'/help/export#what-is-power-platform'}>Power Platform</Link>. See our
						<Link to={'https://github.com/DreMukare/lobe-ai'}>GitHub</Link> for sample projects and other tools for working with Lobe.
						We are also working on a collection of apps and integrations to help run your model without any code.
					</p>

					<p>
						See more in <Link to={'/help/export'}>Export</Link>
					</p>
				</>
			),
		},
		{
			titleText: 'How much does Lobe cost?',
			content: (
				<>
					<p>
						Lobe is free and runs entirely on your computer.
					</p>
				</>
			),
		},
		{
			titleText: 'Do I need any machine learning experience?',
			content: (
				<>
					<p>
						No machine learning knowledge is necessary.
						Lobe follows best practices while automatically building and training a model for you.
					</p>
				</>
			),
		},
		{
			titleText: 'Are my images and models private?',
			content: (
				<>
					<p>
						Yes, all of your images and models stay private on your computer. Lobe runs and trains
						machine learning models entirely on your own device. Your project images and models are
						never uploaded to the cloud or visible to us.
					</p>

					<p>
						If you <Link to={'/help/export'}>opt-in</Link> to app analytics,
						<Link to={'/tips#what-data-is-collected'}>learn more about what is collected</Link>.
					</p>
				</>
			),
		},
		// This element is repeated in all menu items: should be made a reusable component
		{
			titleText: (
				<>
					<Link to={'https://aka.ms/LobeCommunity'}>
						<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g transform="translate(-371.000000, -1122.000000)" fill="#F64A00">
									<g transform="translate(371.000000, 82.000000)">
										<g transform="translate(0.000000, 1002.000000)">
											<g transform="translate(0.000000, 38.000000)">
												<path d="M32,19.3333534 C32.0045503,21.0931743 31.5933878,22.829194 30.7999639,24.400012 C28.8812458,28.2391097 24.9585165,30.665008 20.6666466,30.6666688 C18.9068257,30.6712571 17.170806,30.2600946 15.599988,29.4666707 L8,32 L10.5333293,24.400012 C9.73990543,22.829194 9.32874289,21.0931743 9.33333122,19.3333534 C9.33499196,15.0414835 11.7608903,11.1187542 15.599988,9.20003608 C17.170806,8.40661219 18.9068257,7.99544966 20.6666466,8 L21.3333122,8 C27.0877157,8.31750374 31.6824963,12.9122843 32,18.6666878 L32,19.3333534 L32,19.3333534 Z">
												</path>
											</g></g></g></g></g>
						</svg>
						<h2>Ask a question in the Lobe community.</h2>
						<svg width="32px" height="32px" viewBox="0 0 32 32"><title>chevron-right</title>
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
								<g transform="translate(-936.000000, -1127.000000)" stroke="#333333" stroke-width="3">
									<g transform="translate(378.000000, 82.000000)">
										<g transform="translate(0.000000, 1002.000000)">
											<g id="Group-4" transform="translate(0.000000, 43.000000)">
												<g id="Group-8" transform="translate(1.000000, 0.000000)">
													<g id="chevron-down" transform="translate(557.000000, 0.000000)">
														<polyline transform="translate(17.000000, 16.000000) rotate(-90.000000) translate(-17.000000, -16.000000) " points="11 13 17 19 23 13"></polyline></g></g></g></g></g></g></g>
						</svg>
					</Link>
				</>
			),
		},
	],
	label: [
		{
			titleText: 'What is labeling?',
			content: (
				<>
					<p>
						Labeling is assigning categories to your images to create <strong>examples</strong> that teach Lobe. These examples are commonly known as a <strong>dataset</strong>. From this dataset, Lobe will learn to automatically predict a label for a given image.
					</p>
				</>
			),
		},
		{
			titleText: 'How do I create a dataset?',
			content: (
				<>
					<p>

						<strong>Import and label your images in Lobe.</strong>
					</p>
					<p>

						<strong>Images</strong> - import common image files directly from your computer. Lobe supports JPEG, PNG, BMP, and WebP formats.
					</p>
					<p>
						<strong>Camera</strong> - use any connected camera source to capture images directly in Lobe. You can optionally provide a label for these images. Hold down the camera button to capture a burst of images.
					</p>
				</>
			),
		},
		{
			titleText: 'What types of images should I collect?',
			content: (
				<>
					<p>
						<strong>
							Collect images that you expect to see in the real world.
						</strong><br />
						Lobe can only learn the patterns that exist in the images you provide as examples. Collect images from the same source you expect to use with your exported model.
					</p>
					<p>
						<strong>
							Capture as many variations as possible.
						</strong><br />
						Try to capture all the variations that naturally occur by collecting images in different conditions. Try different backgrounds, lighting, orientations, or zoom. This helps Lobe learn what parts of the image are useful for making predictions and what is noise.
					</p>
					<p>
						<strong>
							Collect images that you expect to see in the real world.
						</strong><br />
						Lobe can only learn the patterns that exist in the images you provide as examples. Collect images from the same source you expect to use with your exported model.
					</p>
				</>
			),
		},
	],
	train: [],
	results: [],
	play: [],
	export: [],
	improving: [],
	tips: [],
};

export { dropdownData };
