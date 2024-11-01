import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react'
import { toast } from "@/hooks/use-toast"

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

	const handleChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setContactData(prevData => ({
			...prevData,
			[name]: value
		}));
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 2000));

			// Handle form submission
			console.log('Form submitted', contactData);

			toast({
				title: "Message Sent",
				description: "We've received your message and will get back to you soon.",
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
				description: "There was a problem sending your message. Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
			<div className="container mx-auto px-6">
				<h1
					className="text-4xl font-bold text-center mb-8"
				>
					Contact Us
				</h1>
				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<form onSubmit={handleSubmit} className="space-y-4">
								<Input
									type="text"
									name="name"
									value={contactData.name}
									onChange={handleChangeData}
									placeholder="Your Name"
									required
								/>
								<Input
									type="email"
									name="email"
									value={contactData.email}
									onChange={handleChangeData}
									placeholder="Your Email"
									required
								/>
								<Input
									type="text"
									name="subject"
									value={contactData.subject}
									onChange={handleChangeData}
									placeholder="Subject"
									required
								/>
								<Textarea
									name="message"
									value={contactData.message}
									onChange={handleChangeData}
									placeholder="Your Message"
									className="bg-white"
									required
								/>
								<Button type="submit" className="w-full bg-primary-700 text-white" disabled={isSubmitting}>
									{isSubmitting ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Sending...
										</>
									) : (
										'Send Message'
									)}
								</Button>
							</form>
						</div>
						<div>
							<Card className="p-2">
								<CardHeader>
									<CardTitle className="flex items-center">
										<Mail className="mr-2" /> Email Us
									</CardTitle>
								</CardHeader>
								<CardContent>
									<a href="mailto:support@bankstatementanalyzer.com" className="text-primary-600 hover:underline">
										support@bankstatementanalyzer.com
									</a>
								</CardContent>

								<CardHeader>
									<CardTitle className="flex items-center">
										<Phone className="mr-2" /> Call Us
									</CardTitle>
								</CardHeader>
								<CardContent>
									<a href="tel:+1234567890" className="text-primary-600 hover:underline">
										+1 (234) 567-890
									</a>
								</CardContent>

								<CardHeader>
									<CardTitle className="flex items-center">
										<MapPin className="mr-2" /> Visit Us
									</CardTitle>
								</CardHeader>
								<CardContent>
									<address className="not-italic">
										123 Financial Street<br />
										Analyticsville, AN 12345<br />
										United States
									</address>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}