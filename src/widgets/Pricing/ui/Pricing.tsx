"use client";
import React, { useState } from "react";
import styles from "./Pricing.module.scss";
import clsx from "clsx";
import { Container } from "@/shared/ui/Container/Container";
import { WhiteLine } from "@/shared/ui/WhiteLine/WhiteLine";
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { Button } from "@/shared/ui/Button/Button";

interface PricingProps {
  className?: string;
}

const plans = [
  {
    name: "Ultimate",
    description: ["500 generations", "The best choice"],
    price: "$0.59",
    credit: "for 1 credit",
    features: [
      "No wait",
      "Without a queue",
      "High-quality photos",
      "HD mode, No blur, No watermark",
    ],
    buttonText: "Buy for $8.99",
    category: "premium",
  },
  {
    name: "Artist",
    description: ["1000 generations", "Save 50%"],
    price: "$0.39",
    credit: "for 1 credit",
    features: [
      "No wait",
      "Without a queue",
      "High-quality photos",
      "HD mode, No blur, No watermark",
    ],
    sale: 50,
    buttonText: "Buy for $15.99",
    category: "premium",
  },
  {
    name: "Master",
    description: ["1500 generations", "Most comfortable"],
    price: "$0.29",
    credit: "for 1 credit",
    features: [
      "No wait",
      "Without a queue",
      "High-quality photos",
      "HD mode, No blur, No watermark",
    ],
    buttonText: "Buy for $28.99",
    category: "premium",
  },
  {
    name: "Basic",
    description: ["1500 generations", "Most comfortable"],
    price: "$0.8",
    credit: "for 1 credit",
    features: [
      "No wait",
      "Without a queue",
      "High-quality photos",
      "HD mode, No blur, No watermark",
    ],
    buttonText: "Buy for $4.99",
    category: "other",
  },
];

export const Pricing: React.FC<PricingProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<"premium" | "other">("premium");

  const filteredPlans = plans.filter((plan) => plan.category === activeTab);

  return (
    <section className={clsx(styles.Pricing, className)}>
      <Container>
        <div className={styles.innerPricing}>
          <WhiteLine className={styles.whiteLine}>
            Realistic AI Image Generator: Create Photorealistic Images with AI
          </WhiteLine>
          <SectionTitle className={styles.title}>
            Discover our <span>Pricing</span>
          </SectionTitle>
          <div className={styles.buttons}>
            <Button
              className={
                activeTab === "premium"
                  ? clsx(styles.active, styles.button)
                  : styles.button
              }
              onClick={() => setActiveTab("premium")}
            >
              Premium plans
            </Button>
            <Button
              className={
                activeTab === "other"
                  ? clsx(styles.active, styles.button)
                  : styles.button
              }
              onClick={() => setActiveTab("other")}
            >
              Other plans
            </Button>
          </div>

          <div className={styles.cards}>
            {filteredPlans.map((plan) => {
              const priceNumber = parseFloat(
                plan.buttonText.replace(/[^0-9.]/g, "")
              );
              const finalPrice = plan.sale
                ? (priceNumber * (100 - plan.sale)) / 100
                : priceNumber;

              return (
                <article
                  key={plan.name}
                  className={
                    plan.sale
                      ? clsx(styles.cardsItem, styles.itemSale)
                      : styles.cardsItem
                  }
                >
                  <header>
                    <h3 className={styles.cardTitle}>{plan.name}</h3>
                    {plan.sale && (
                      <div className={styles.sale}>Sale -{plan.sale}%</div>
                    )}
                  </header>

                  <p className={styles.description}>
                    {plan.description.map((item, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <span className={styles.dot} />} {item}
                      </React.Fragment>
                    ))}
                  </p>
                  <div className={styles.price}>
                    <strong>{plan.price}</strong>
                    <p>{plan.credit}</p>
                  </div>

                  <div className={styles.included}>
                    <h3>What&apos;s included?</h3>
                    <ul className={styles.features}>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className={styles.buyButton} variant="filled">
                    {!plan.sale ? (
                      <>Buy for ${finalPrice.toFixed(2)}</>
                    ) : (
                      <span>
                        Buy for <span>${priceNumber}</span> $
                        {finalPrice.toFixed(2)}
                      </span>
                    )}
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
