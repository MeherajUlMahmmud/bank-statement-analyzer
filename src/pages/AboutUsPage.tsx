import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Lightbulb, Target, CheckCircle, Shield, Zap, HeadphonesIcon } from 'lucide-react'

export default function AboutUsPage() {
	return (
		<div className="py-16">
			<div className="container mx-auto px-6">
				<h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
				<div className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
					<p className="mb-4">
						We're passionate about empowering individuals and businesses with clear, actionable financial insights. Our team of finance experts and data scientists have come together to create a powerful tool that transforms complex bank statements into easy-to-understand analyses.
					</p>
					<p>
						Founded in 2023, we've quickly grown to become a trusted partner for thousands of users who rely on our platform to make informed financial decisions. Our mission is to democratize financial analysis, making it accessible to everyone, regardless of their financial background.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					<Card>
						<CardHeader>
							<Users className="h-10 w-10 text-primary-600 mb-2" />
							<CardTitle>Our Team</CardTitle>
						</CardHeader>
						<CardContent>
							We're a diverse group of finance professionals, data scientists, and software engineers united by our passion for financial technology.
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<Lightbulb className="h-10 w-10 text-primary-600 mb-2" />
							<CardTitle>Our Approach</CardTitle>
						</CardHeader>
						<CardContent>
							We combine cutting-edge AI technology with financial expertise to deliver accurate, insightful, and easy-to-understand analyses.
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<Target className="h-10 w-10 text-primary-600 mb-2" />
							<CardTitle>Our Goal</CardTitle>
						</CardHeader>
						<CardContent>
							We aim to help our users achieve financial clarity, make better decisions, and ultimately improve their financial well-being.
						</CardContent>
					</Card>
				</div>

				<Card className="bg-white rounded-lg shadow-lg">
					<CardHeader>
						<CardTitle className="text-2xl font-bold text-primary-600">Our Commitment to You</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex items-start space-x-4">
								<CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
								<div>
									<h3 className="font-semibold text-lg mb-2">Accuracy</h3>
									<p className="text-gray-700">We continuously refine our algorithms to ensure the highest level of precision in our analyses.</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<Shield className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
								<div>
									<h3 className="font-semibold text-lg mb-2">Security</h3>
									<p className="text-gray-700">Your financial data's safety is our top priority. We use bank-level encryption to protect your information.</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<Zap className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
								<div>
									<h3 className="font-semibold text-lg mb-2">Innovation</h3>
									<p className="text-gray-700">We're always exploring new ways to provide you with deeper insights and a better user experience.</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<HeadphonesIcon className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
								<div>
									<h3 className="font-semibold text-lg mb-2">Support</h3>
									<p className="text-gray-700">Our dedicated customer support team is always ready to assist you with any questions or concerns.</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}