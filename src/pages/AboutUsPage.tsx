"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Lightbulb, Target, CheckCircle, Shield, Zap, HeadphonesIcon, ArrowRight, LucideIcon } from "lucide-react"

interface FeatureCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
	<motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
		<Card className="h-full">
			<CardHeader>
				<Icon className="h-12 w-12 text-primary mb-4" />
				<CardTitle className="text-xl">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-muted-foreground">{description}</p>
			</CardContent>
		</Card>
	</motion.div>
)

interface CommitmentItemProps {
	icon: LucideIcon
	title: string
	description: string
}

const CommitmentItem: React.FC<CommitmentItemProps> = ({ icon: Icon, title, description }) => (
	<motion.div
		className="flex items-start space-x-4"
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5 }}
	>
		<Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
		<div>
			<h3 className="font-semibold text-lg mb-2">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	</motion.div>
)

export default function AboutUsPage() {
	return (
		<div className="py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h1
					className="text-5xl font-bold text-center mb-8 text-foreground"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					About Us
				</motion.h1>
				<motion.div
					className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<p className="mb-4">
						We're passionate about empowering individuals and businesses with clear, actionable financial insights. Our
						team of finance experts and data scientists have come together to create a powerful tool that transforms
						complex bank statements into easy-to-understand analyses.
					</p>
					<p>
						Founded in 2023, we've quickly grown to become a trusted partner for thousands of users who rely on our
						platform to make informed financial decisions. Our mission is to democratize financial analysis, making it
						accessible to everyone, regardless of their financial background.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					<FeatureCard
						icon={Users}
						title="Our Team"
						description="We're a diverse group of finance professionals, data scientists, and software engineers united by our passion for financial technology."
					/>
					<FeatureCard
						icon={Lightbulb}
						title="Our Approach"
						description="We combine cutting-edge AI technology with financial expertise to deliver accurate, insightful, and easy-to-understand analyses."
					/>
					<FeatureCard
						icon={Target}
						title="Our Goal"
						description="We aim to help our users achieve financial clarity, make better decisions, and ultimately improve their financial well-being."
					/>
				</div>

				<Card className="bg-card text-card-foreground rounded-lg shadow-lg mb-16">
					<CardHeader>
						<CardTitle className="text-3xl font-bold text-primary mb-6">Our Commitment to You</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<CommitmentItem
								icon={CheckCircle}
								title="Accuracy"
								description="We continuously refine our algorithms to ensure the highest level of precision in our analyses."
							/>
							<CommitmentItem
								icon={Shield}
								title="Security"
								description="Your financial data's safety is our top priority. We use bank-level encryption to protect your information."
							/>
							<CommitmentItem
								icon={Zap}
								title="Innovation"
								description="We're always exploring new ways to provide you with deeper insights and a better user experience."
							/>
							<CommitmentItem
								icon={HeadphonesIcon}
								title="Support"
								description="Our dedicated customer support team is always ready to assist you with any questions or concerns."
							/>
						</div>
					</CardContent>
				</Card>

				<motion.div
					className="text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
					<Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
						Try Our Tool Now <ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</motion.div>
			</div>
		</div>
	)
}

