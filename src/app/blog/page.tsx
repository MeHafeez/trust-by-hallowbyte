"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Heart, Eye, ArrowRight, Search } from "lucide-react";
import { blogPosts, categories, categoryColors, type BlogCategory } from "@/data/blog";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");

  const filtered = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80"
            alt="Our work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/85 to-primary-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300 backdrop-blur-sm">
            Blog &amp; Gallery
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Our Impact in Action
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            See how your donations are changing lives. Every picture tells a story of hope, compassion, and transformation.
          </p>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-gray-100 bg-white/90 backdrop-blur-xl">
        <div className="container-custom flex items-center gap-3 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${categoryColors[post.category]} bg-white/90 backdrop-blur-sm`}>
                    {categories.find((c) => c.key === post.category)?.label}
                  </span>
                  {post.gallery.length > 1 && (
                    <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      <Eye className="h-3 w-3" />
                      {post.gallery.length} photos
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {post.location}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-gray-900 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 transition-colors group-hover:text-primary-600">
                    View Gallery &amp; Story
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <Search className="mx-auto h-12 w-12 text-gray-300" />
              <h3 className="mt-4 font-display text-xl font-bold text-gray-900">No posts found</h3>
              <p className="mt-2 text-sm text-gray-500">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-primary-500 py-14">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Your Donation Creates These Stories
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-100">
            Every rupee you donate becomes a photo of a life saved, a child in school, or a family fed. Be the next story.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/donate" className="btn-gold gap-2 px-8">
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>
            <Link href="/cases" className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-primary-500">
              View Active Cases
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
