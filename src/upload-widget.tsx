import { useState, useEffect, useRef, ReactElement } from 'react';
import { useToast } from './hooks/use-toast';

declare global {
  interface Window {
    cloudinary: any;
  }
}

interface UploadWidgetProps {
  img: ReactElement;
}

const UploadWidget = ({ img } : UploadWidgetProps): JSX.Element => {
	const [cloudinaryReady, setCloudinaryReady] = useState(false);
	const { toast } = useToast();
	const widgetRef = useRef(null) as any;

	const cloudName = 'dgxaoqjyu';
	const uploadPreset = 'default';

	const uwConfig = {
		cloudName,
		uploadPreset,
		multiple: true,
		maxImageFileSize: 2000000
	};

	useEffect(() => {
		const CLOUDINARY_SCRIPT_URL = 'https://widget.cloudinary.com/v2.0/global/all.js';
		const existingScript = document.querySelector(`script[src="${CLOUDINARY_SCRIPT_URL}"]`) as HTMLScriptElement;

		if (existingScript) {
			existingScript.onload = () => setCloudinaryReady(true);
			if (window.cloudinary) setCloudinaryReady(true);
			return;
		}

		const script = document.createElement('script');
		script.src = CLOUDINARY_SCRIPT_URL;
		script.async = true;
		script.onload = () => setCloudinaryReady(true);
		document.body.appendChild(script);

		return () => {
			script.onload = null;
		};
	}, []);

	useEffect(() => {
		if (cloudinaryReady && !widgetRef.current) {
			widgetRef.current = window.cloudinary.createUploadWidget(
				uwConfig,
				(error: any, result: any) => {
					if (!error && result?.event === 'success') {
						toast({
							title: 'Image uploaded',
							description: result?.info?.secure_url
						});
					} else if (error) {
						toast({
							title: 'Upload failed',
							description: error.message,
							variant: 'destructive'
						});
					}
				}
			);

			toast({
				title: 'Uploading ready',
				description: 'You can now upload images by pressing the main image. Be sure to upload images that have corresponding naming in the database.'

			});
		}
	}, [cloudinaryReady]);

	const handleUploadClick = () => {
		if (widgetRef.current) {
			widgetRef.current.open();
		} else {
			toast({
				title: 'Widget not ready',
				description: 'Please wait for the widget to load.',
				variant: 'destructive'
			});
		}
	};

	return (
		<button onClick={handleUploadClick} disabled={!cloudinaryReady}>
			{img}
		</button>
	);
};

export default UploadWidget;
