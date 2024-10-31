import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactUsPage() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// Handle form submission
		console.log('Form submitted')
	}

	return (
		<div className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
			<div className="container mx-auto px-6">
				<h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<form onSubmit={handleSubmit} className="space-y-4">
								<Input type="text" placeholder="Your Name" required />
								<Input type="email" placeholder="Your Email" required />
								<Input type="text" placeholder="Subject" required />
								<Textarea placeholder="Your Message" required />
								<Button type="submit" className="w-full">Send Message</Button>
							</form>
						</div>
						<div className="space-y-6">
							<Card>
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
							</Card>
							<Card>
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
							</Card>
							<Card>
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
