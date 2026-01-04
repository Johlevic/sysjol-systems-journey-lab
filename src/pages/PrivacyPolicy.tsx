import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <Link to="/" className="inline-block">
          <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="border-muted bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">Terms and Conditions</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
            <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Introduction</h3>
                  <p>
                    Welcome to SysJol Systems Journey Lab ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Information We Collect</h3>
                  <p>
                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. How We Use Your Information</h3>
                  <p>
                    We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Logins from Social Media Services</h3>
                  <p>
                    Our services may allow you to register and log in using your third-party social media account details (like your Facebook or Meta credentials). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
                  </p>
                  <p className="mt-2">
                    We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Website. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. Sharing Your Information</h3>
                  <p>
                    We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">6. Data Deletion</h3>
                  <p>
                     You have the right to request the deletion of your personal data. If you have logged in via a social media provider, you can also request deletion of your data through the settings of that social media platform or by contacting us directly. We will take reasonable steps to delete your personal information, subject to our legal obligations.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">7. Security of Your Information</h3>
                  <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                  </p>
                </section>

                 <section>
                  <h3 className="text-lg font-semibold text-foreground mb-2">8. Contact Us</h3>
                  <p>
                    If you have questions or comments about this policy, you may email us or contact us by post.
                  </p>
                </section>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
