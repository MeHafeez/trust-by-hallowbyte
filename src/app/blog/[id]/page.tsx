"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  ArrowLeft,
  Heart,
  Share2,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";
import { getBlogPostById, getRelatedPosts, categories, categoryColors } from "@/data/blog";

export default function BlogDetailPage() {
  const params = useParams();
  const post = getBlogPostById(params.id as string);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!post) {
    return (
      <section className="section-padding bg-warm-50">
        <div className="container-custom py-32 text-center">
          <h1 className="font-display text-3xl font-bold text-gray-900">Post Not Found</h1>
          <p className="mt-4 text-gray-500">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="btn-primary mt-8 inline-flex gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const related = getRelatedPosts(post.id, 3);
  const categoryLabel = categories.find((c) => c.key === post.category)?.label ?? post.category;

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => setActiveImage((prev) => (prev + 1) % post.gallery.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + post.gallery.length) % post.gallery.length);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-0 pt-0">
        <div className="relative h-[50vh] min-h-[400px] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="container-custom">
              <Link
                href="/blog"
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${categoryColors[post.category]} bg-white/90 backdrop-blur-sm`}>
                  {categoryLabel}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/70">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin className="h-3.5 w-3.5" />
                  {post.location}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/70">
                  <Images className="h-3.5 w-3.5" />
                  {post.gallery.length} photos
                </span>
              </div>
              <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Excerpt highlight */}
            <div className="rounded-2xl bg-primary-50 p-6 ring-1 ring-primary-100">
              <p className="text-base leading-relaxed text-primary-800 font-medium">
                {post.excerpt}
              </p>
            </div>

            {/* Body */}
            <div className="mt-10 space-y-6">
              {post.body.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-500">
                  Gallery
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                  Photos from This Activity
                </h2>
              </div>
              <span className="hidden items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 sm:flex">
                <Eye className="h-4 w-4" />
                {post.gallery.length} photos
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {post.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none"
                >
                  <Image
                    src={img}
                    alt={`${post.title} — Photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                      <Eye className="h-5 w-5 text-gray-800" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {i + 1}/{post.gallery.length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Share + Donate */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-14">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Inspired by This Story?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-100">
            Your donation creates more stories like this one. Help us reach more families in need.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/donate" className="btn-gold gap-2 px-8">
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, text: post.excerpt, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-primary-600"
            >
              <Share2 className="h-4 w-4" />
              Share This Story
            </button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center">
              <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-500">
                More Stories
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                Related Posts
              </h2>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {related.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.id}`}
                  className="group overflow-hidden rounded-2xl bg-gray-50 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${categoryColors[rp.category]} bg-white/90 backdrop-blur-sm`}>
                      {categories.find((c) => c.key === rp.category)?.label}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400">{rp.date} · {rp.location}</p>
                    <h3 className="mt-2 font-display text-base font-bold text-gray-900 group-hover:text-primary-500 transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative h-[80vh] w-[90vw] max-w-5xl">
            <Image
              src={post.gallery[activeImage]}
              alt={`${post.title} — Photo ${activeImage + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">
                {activeImage + 1} / {post.gallery.length}
              </span>
              <div className="flex gap-1.5">
                {post.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === activeImage ? "bg-white w-6" : "bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
