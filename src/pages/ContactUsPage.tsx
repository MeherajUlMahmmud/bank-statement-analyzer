import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

interface ContactData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function ContactUsPage() {
	const [contactData, setContactData] = useState<ContactData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast()

	const handleChangeData = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setContactData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// Handle form submission
			console.log("Form submitted", contactData);

			toast({
				title: "Message Sent",
				description:
					"We've received your message and will get back to you soon.",
			});

			// Reset form
			setContactData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		} catch (error) {
			toast({
				title: "Error",
				description:
					"There was a problem sending your message. Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className=" py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h1
					className="text-4xl font-bold text-center mb-8 text-primary-800"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Get in Touch
				</motion.h1>
				<motion.div
					className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div className="p-8 bg-primary-600">
							<h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
							<div className="space-y-6">
								<div className="flex items-center space-x-4 text-white">
									<Mail className="h-6 w-6" />
									<a href="mailto:support@bankstatementanalyzer.com" className="hover:underline">
										support@bankstatementanalyzer.com
									</a>
								</div>
								<div className="flex items-center space-x-4 text-white">
									<Phone className="h-6 w-6" />
									<a href="tel:+1234567890" className="hover:underline">
										+1 (234) 567-890
									</a>
								</div>
								<div className="flex items-center space-x-4 text-white">
									<MapPin className="h-6 w-6" />
									<address className="not-italic">
										123 Financial Street
										<br />
										Analyticsville, AN 12345
										<br />
										United States
									</address>
								</div>
							</div>
							<div className="mt-12">
								<h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
								<div className="flex space-x-4">{/* Add social media icons here */}</div>
							</div>
						</div>
						<div className="p-8">
							<h2 className="text-2xl font-semibold text-primary-800 mb-6">Send us a Message</h2>
							<form onSubmit={handleSubmit} className="space-y-4">
								<Input
									type="text"
									name="name"
									value={contactData.name}
									onChange={handleChangeData}
									placeholder="Your Name"
									className="bg-primary-50"
									required
								/>
								<Input
									type="email"
									name="email"
									value={contactData.email}
									onChange={handleChangeData}
									placeholder="Your Email"
									className="bg-primary-50"
									required
								/>
								<Input
									type="text"
									name="subject"
									value={contactData.subject}
									onChange={handleChangeData}
									placeholder="Subject"
									className="bg-primary-50"
									required
								/>
								<Textarea
									name="message"
									value={contactData.message}
									onChange={handleChangeData}
									placeholder="Your Message"
									className="bg-primary-50"
									rows={4}
									required
								/>
								<Button
									type="submit"
									className="w-full bg-primary-600 hover:bg-primary-700 text-white"
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Sending...
										</>
									) : (
										<>
											<Send className="mr-2 h-4 w-4" />
											Send Message
										</>
									)}
								</Button>
							</form>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
